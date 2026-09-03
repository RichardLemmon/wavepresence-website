/* WavePresence "find your kit" — recommendation logic.
 * Pure functions, no DOM. Loaded by /start/index.html and by the node test.
 * Prices are placeholders set by Rich on 2026-09-03 for testing the flow.
 */
(function (root) {
  'use strict';

  var PRODUCTS = {
    bedroom_base:  { name: 'Bedroom sensor',                     price: 49, family: 'bedroom' },
    bedroom_stone: { name: 'Bedroom sensor, stone with nightlight', price: 69, family: 'bedroom' },
    bedroom_plant: { name: 'Bedroom sensor, plant',              price: 69, family: 'bedroom' },
    bedroom_stalk: { name: 'Bedroom sensor, stalk',              price: 49, family: 'bedroom' },
    mat:           { name: 'Floor pressure mat',                       price: 49, family: 'mat' },
    door:          { name: 'Door sensor',                        price: 19, family: 'door' },
    living_base:   { name: 'Living-space sensor',                price: 49, family: 'living' },
    living_stone:  { name: 'Living-space sensor, stone',         price: 59, family: 'living' },
    living_plant:  { name: 'Living-space sensor, plant',         price: 59, family: 'living' },
    living_stalk:  { name: 'Living-space sensor, stalk',         price: 49, family: 'living' },
    bathroom:      { name: 'Bathroom sensor',                    price: 29, family: 'bathroom' },
    fall:          { name: 'Fall sensor',                        price: 89, family: 'fall' },
    minipuck:      { name: 'Hallway mini-puck',                  price: 19, family: 'hallway' }
  };

  var PRONOUNS = {
    she:  { subj: 'she',  obj: 'her',  poss: 'her',   is: 'is',  s: 's' },
    he:   { subj: 'he',   obj: 'him',  poss: 'his',   is: 'is',  s: 's' },
    they: { subj: 'they', obj: 'them', poss: 'their', is: 'are', s: '' }
  };

  function pronouns(key) {
    return PRONOUNS[key] || PRONOUNS.they;
  }

  function cap(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  /* "your mother", "your father", "your husband or wife", or the name. */
  function whoIs(a) {
    var rel = { mother: 'your mother', father: 'your father', spouse: 'your spouse' }[a.person.relationship];
    return rel || (a.person.name || 'they');
  }

  function defaults() {
    return {
      person: { name: '', relationship: 'mother', pronouns: 'she' },
      lives: 'nearby',
      others: 0,
      pets: [],
      rooms: { kitchen: true, living: true, bathroom: false, hallway: false, other: [] },
      floors: 1,
      sharesBed: false,
      ensuite: false,
      /* Notification level is asked in the app, not here. Kept null so the
       * app knows it was never answered. */
      level: null,
      style: { bedroom: 'stone', living: 'base' },
      /* per-room overrides of the living-space style, keyed by room name */
      roomStyle: { Kitchen: 'plant', 'Living room': 'stalk' },
      selected: {},
      /* per-line quantity overrides for adjustable lines (doors, hallway pucks) */
      qty: {}
    };
  }

  /* The three notification levels, in the family's words. */
  function levelCopy(a) {
    var n = a.person.name || 'Mom';
    var p = pronouns(a.person.pronouns);
    return {
      low: {
        title: 'Low',
        lede: n + ' is pretty self-sufficient.',
        body: cap(p.subj) + ' can come and go without concern. We just worry about ' + p.obj + ' falling.'
      },
      medium: {
        title: 'Medium',
        lede: n + ' gets up two or three times a night.',
        body: 'That is normal for ' + p.obj + '. Sometimes ' + p.subj + ' forget' + p.s + ' and go' + (p.s ? 'es' : '') + ' downstairs. We want to know any time ' + p.subj + ' leave' + p.s + ' ' + p.poss + ' room.'
      },
      high: {
        title: 'High',
        lede: 'When in bed, ' + n + ' should be asleep.',
        body: cap(p.subj) + ' should not be turning lights on or taking a shower in the middle of the night. We want to know any time ' + p.subj + ' ' + p.is + ' out of bed for more than a bathroom break.'
      }
    };
  }

  /* Build the kit. Returns { lines, notes, total }.
   * A line: { key, sku, name, price, qty, room, why, optional, selected }.
   * Every line is a checkbox. `selected` comes from a.selected[key] when the
   * buyer has touched it, otherwise it defaults to !optional. Only selected
   * lines count toward the total.
   */
  /* Small single-item rooms share one page. Three pages carrying one line each
     read as padding; together they read as "the rest of the home". */
  var REST = 'The rest of the home';

  function recommend(a) {
    var n = a.person.name || 'Mom';
    var p = pronouns(a.person.pronouns);
    var lines = [];
    var notes = [];
    var bedsides = a.sharesBed ? 2 : 1;
    var bedroom = n + '’s bedroom';
    var who = whoIs(a);
    var bedSku = 'bedroom_' + (a.style.bedroom || 'base');
    var livingStyle = function (room) { return (a.roomStyle && a.roomStyle[room]) || a.style.living || 'base'; };

    lines.push({
      sku: bedSku, qty: bedsides, room: bedroom, group: bedroom, required: true,
      why: bedsides === 2
        ? 'You mentioned ' + who + ' shares a bed. We recommend one sensor on each side, so you always know who got up. Each reads breathing and heart micro-motion, body motion using radar and heat sensing for the person on its side.'
        : 'Reads breathing and heart micro-motion, body motion using radar and heat sensing. With the floor pressure mat and door sensor, that combination is what gives families peace of mind. Nothing needs to be worn.'
    });

    lines.push({
      sku: 'mat', qty: bedsides, room: bedroom, group: bedroom,
      why: bedsides === 2
        ? 'One strip per side, where the feet land. Sits on the floor or under a rug, right where each foot lands. The only sensor that knows someone stood up.'
        : 'Sits on the floor or under a rug, right where ' + p.poss + ' feet land. The primary sensor that knows ' + p.subj + ' ' + p.is + ' up. If ' + p.subj + ' sleep' + p.s + ' with the door open, add a second mat just inside the door and skip the door sensor.',
      skip: 'If ' + who + ' rarely gets up at night, the mat can wait. You can add it any time.'
    });

    lines.push({
      sku: 'door', qty: 1, room: bedroom, group: bedroom,
      why: 'Attaches to the door frame and the door itself. Hears the door open and close, so “entering or leaving the room” is never a guess.',
      skip: 'If ' + who + ' sleeps with the door open, a door sensor may not be necessary.'
    });

    if (a.rooms.kitchen || a.floors > 1) {
      lines.push({
        sku: 'door', qty: 1, room: a.floors > 1 ? 'Top of the stairs or kitchen door' : 'Kitchen door',
        group: a.rooms.kitchen ? 'Kitchen' : REST,
        why: 'Turns “left the room” into “went downstairs” at 3 a.m. That is the one you asked about.',
        skip: 'If trips downstairs at night or potential wandering isn’t an issue, leave this one out.'
      });
    }

    var livingRooms = [];
    var hallways = [];
    var isHall = function (r) { return /\b(hall|hallway|corridor|landing|passage)\b/i.test(r); };
    if (a.rooms.kitchen) livingRooms.push('Kitchen');
    if (a.rooms.living) livingRooms.push('Living room');
    if (a.rooms.hallway) hallways.push('Hallway');
    (a.rooms.other || []).forEach(function (r) {
      if (!r || !r.trim()) return;
      (isHall(r) ? hallways : livingRooms).push(r.trim());
    });
    livingRooms.forEach(function (room, i) {
      lines.push({
        sku: 'living_' + livingStyle(room), qty: 1, room: room, group: room, style: livingStyle(room),
        why: i === 0
          ? 'Presence and movement only. It does not read breathing or heart rate, and it does not need to. If ' + n + ' isn’t in ' + p.poss + ' room, this will tell you which room ' + p.subj + ' ' + p.is + ' in.'
          : 'Presence and movement only.',
        skip: 'Only for rooms you want to hear about. If this one doesn’t matter to you, skip it.'
      });
    });

    hallways.forEach(function (room) {
      lines.push({
        sku: 'minipuck', qty: 1, room: room, group: REST,
        why: 'A small puck that plugs straight into a wall outlet. Presence and movement only. It catches anyone passing through, which is how you know about wandering between rooms at night.',
        skip: 'If ' + who + ' doesn’t wander at night, the hallway can wait.'
      });
    });

    var wantBath = a.rooms.bathroom || a.ensuite;
    if (wantBath) {
      lines.push({
        sku: 'bathroom', qty: 1, optional: !a.rooms.bathroom,
        room: a.ensuite ? n + '’s bathroom' : 'Bathroom', group: REST,
        why: 'Humidity and movement. It knows a shower from a visit, and a visit that runs long.',
        skip: 'If showers and long visits aren’t a concern, this one can wait.'
      });
    }

    lines.push({
      sku: 'fall', qty: a.floors || 1, room: (a.floors || 1) > 1 ? 'One per floor' : 'Main floor', group: REST,
      why: 'Feels the floor itself. One per floor senses a fall anywhere on it, in any room, with nothing worn.',
      skip: 'If falls aren’t the worry, you can add this later.'
    });

    if (a.ensuite) {
      notes.push(n + '’s bedroom has its own bathroom, so ' + p.subj + ' can be out of bed for minutes without opening a door. We set the alarm clock for that, and ask you how long a normal visit is.');
    }
    if (a.pets && a.pets.length) {
      var big = a.pets.some(function (x) { return x.size === 'large'; });
      notes.push('Pets make rooms look busy. The bedroom sensor’s breathing read tells a ' + (big ? 'dog' : 'cat') + ' from a person. In the other rooms we simply trust a single blip less.');
    }
    if (a.sharesBed) {
      notes.push('Two people in one bed is a different problem from one. That is why the bedroom sensor and the mat come one per side.');
    }
    if (a.lives === 'far') {
      notes.push('You are far away, so your Care Circle matters most. In the app you choose who is told first and what counts as no answer.');
    }

    var total = 0;
    var sel = a.selected || {};
    var qtyOverride = a.qty || {};
    var ADJUSTABLE = { door: true, hallway: true, mat: true, bedroom: true };
    lines = lines.map(function (l) {
      var prod = PRODUCTS[l.sku];
      var key = prod.family + '|' + l.room;
      var adjustable = !!ADJUSTABLE[prod.family];
      var qty = adjustable && qtyOverride[key] ? Math.max(1, Math.min(9, qtyOverride[key] | 0)) : l.qty;
      var warn = '';
      /* An offer, not a correction — same rule as the summary lines. */
      if (prod.family === 'bedroom' && a.sharesBed && qty < 2) warn = 'A second sensor on the other side would tell you which of them got up. You can add it any time.';
      var out = {
        key: key, sku: l.sku, name: prod.name, price: prod.price, qty: qty, adjustable: adjustable, warn: warn,
        room: l.room, group: l.group, family: prod.family, style: l.style || null, why: l.why, skip: l.skip || '', optional: !!l.optional,
        required: !!l.required,
        selected: l.required ? true : ((key in sel) ? !!sel[key] : !l.optional)
      };
      if (out.selected && out.price != null) total += out.price * out.qty;
      return out;
    });

    /* Group lines by room, in order of first appearance.
     * Inside a room the sensor comes first, then the mat, then doors. */
    var RANK = { bedroom: 0, living: 0, hallway: 0, bathroom: 0, fall: 0, mat: 1, door: 2 };
    lines = lines.map(function (l, i) { return [RANK[l.family] || 0, i, l]; })
      .sort(function (x, y) { return x[0] - y[0] || x[1] - y[1]; })
      .map(function (t) { return t[2]; });
    var groups = [];
    lines.forEach(function (l) {
      var g = groups.filter(function (x) { return x.name === l.group; })[0];
      if (!g) { g = { name: l.group, lines: [], subtotal: 0 }; groups.push(g); }
      g.lines.push(l);
      if (l.selected && l.price != null) g.subtotal += l.price * l.qty;
    });

    /* One sentence per room saying what the SELECTED parts actually buy. It has
       to stay honest: a bedroom sensor on its own cannot tell you someone got
       up, so it does not claim to. */
    groups.forEach(function (g) {
      var has = {};
      g.lines.forEach(function (l) { if (l.selected) has[l.family] = true; });
      var subj = cap(p.subj), S = p.s, is = p.is, poss = p.poss, obj = p.obj;
      var t = '';

      /* Say what they get. Where a part is missing, offer it for later —
         never tell someone what they failed to buy. */
      if (has.bedroom) {
        if (has.mat && has.door) {
          t = 'You’ll know ' + p.subj + ' ' + is + ' asleep, know the moment ' + p.subj + ' get' + S + ' out of bed, and know whether ' + p.subj + ' came back or left the room.';
        } else if (has.mat) {
          t = 'You’ll know ' + p.subj + ' ' + is + ' asleep and know the moment ' + p.subj + ' get' + S + ' out of bed. When you’re ready, a door sensor can tell you whether ' + p.subj + ' left the room.';
        } else if (has.door) {
          t = 'You’ll know ' + p.subj + ' ' + is + ' asleep and hear the door if ' + p.subj + ' leave' + S + ' at night. When you’re ready, a floor pressure mat can tell you the moment ' + p.subj + ' ' + is + ' out of bed.';
        } else {
          t = 'You’ll know ' + p.subj + ' ' + is + ' in bed and breathing. When you’re ready, you can add a floor pressure mat or door sensor to know ' + p.subj + ' ' + (p.s ? 'hasn’t' : 'haven’t') + ' wandered.';
        }
      } else if (g.name === REST) {
        var bits = [];
        if (has.fall) bits.push('a fall anywhere on that floor is caught, in any room');
        if (has.hallway) bits.push('wandering between rooms at night doesn’t go unseen');
        if (has.bathroom) bits.push('a shower or a visit that runs long is told apart from silence');
        if (bits.length) t = cap(bits[0]) + (bits.length > 1 ? ', and ' + bits.slice(1).join(', and ') : '') + '.';
      } else if (has.living || has.door) {
        var room = g.name.toLowerCase();
        if (has.living && has.door) {
          t = 'You’ll know ' + p.subj + ' used the ' + room + ' today, and hear the door if ' + p.subj + ' head' + S + ' out at night.';
        } else if (has.living) {
          t = 'When the bedroom is empty, this is what tells you ' + p.subj + ' ' + is + ' in the ' + room + '. When you’re ready, a door sensor here can tell you if ' + p.subj + ' head' + S + ' out at night.';
        } else {
          t = 'The door is heard, so leaving the ' + room + ' at night is never a guess.';
        }
      }

      if (!t && g.subtotal === 0) {
        t = 'Nothing here for now. You can add this room any time without buying the kit again.';
      }
      g.assurance = t;
    });

    groups.sort(function (x, y) { return (x.name === REST ? 1 : 0) - (y.name === REST ? 1 : 0); });

    return { lines: lines, groups: groups, notes: notes, total: total, restName: REST };
  }

  var api = { PRODUCTS: PRODUCTS, defaults: defaults, recommend: recommend, levelCopy: levelCopy, pronouns: pronouns };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.WPKit = api;
})(typeof window !== 'undefined' ? window : globalThis);
