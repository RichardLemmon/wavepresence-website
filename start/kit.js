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
    mat:           { name: 'Floor pressure mat',                       price: 49, family: 'mat' },
    door:          { name: 'Door sensor',                        price: 19, family: 'door' },
    living_base:   { name: 'Living-space sensor',                price: 49, family: 'living' },
    living_stone:  { name: 'Living-space sensor, stone',         price: 59, family: 'living' },
    living_plant:  { name: 'Living-space sensor, plant',         price: 59, family: 'living' },
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
      level: 'medium',
      style: { bedroom: 'stone', living: 'base' },
      selected: {}
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
  function recommend(a) {
    var n = a.person.name || 'Mom';
    var p = pronouns(a.person.pronouns);
    var lines = [];
    var notes = [];
    var bedsides = a.sharesBed ? 2 : 1;
    var bedroom = n + '’s bedroom';
    var who = whoIs(a);
    var bedSku = 'bedroom_' + (a.style.bedroom || 'base');
    var livSku = 'living_' + (a.style.living || 'base');

    lines.push({
      sku: bedSku, qty: bedsides, room: bedroom, group: bedroom,
      why: bedsides === 2
        ? 'One per bedside. Each reads breathing and heart micro-motion, body motion using radar and heat sensing for the person on its side, so two sleepers never blur into one.'
        : 'Reads breathing and heart micro-motion, body motion using radar and heat sensing. With the floor pressure mat and door sensor, that combination is what gives families peace of mind. Nothing needs to be worn.'
    });

    lines.push({
      sku: 'mat', qty: bedsides, room: bedroom, group: bedroom, optional: a.level === 'low',
      why: bedsides === 2
        ? 'One strip per side, where the feet land. The only sensor that knows someone stood up.'
        : 'A strip where ' + p.poss + ' feet land. The primary sensor that knows ' + p.subj + ' ' + p.is + ' up.',
      skip: 'If ' + who + ' rarely gets up at night, the mat can wait. You can add it any time.'
    });

    lines.push({
      sku: 'door', qty: 1, room: bedroom, group: bedroom,
      why: 'Hears the bedroom door open and close, so “entering or leaving the room” is never a guess.',
      skip: 'If ' + who + ' sleeps with the door open, a door sensor may not be necessary.'
    });

    if (a.level !== 'low' && (a.rooms.kitchen || a.floors > 1)) {
      lines.push({
        sku: 'door', qty: 1, room: a.floors > 1 ? 'Top of the stairs or kitchen door' : 'Kitchen door',
        group: a.rooms.kitchen ? 'Kitchen' : 'The whole home',
        why: 'Turns “left the room” into “went downstairs” at 3 a.m. That is the one you asked about.',
        skip: 'If trips downstairs at night aren’t a worry, leave this one out.'
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
        sku: livSku, qty: 1, room: room, group: room,
        why: i === 0
          ? 'Presence and movement only. It does not read breathing or heart rate, and it does not need to. If ' + n + ' isn’t in ' + p.poss + ' room, this will tell you which room ' + p.subj + ' ' + p.is + ' in.'
          : 'Presence and movement only.',
        skip: 'Only for rooms you want to hear about. If this one doesn’t matter to you, skip it.'
      });
    });

    hallways.forEach(function (room) {
      lines.push({
        sku: 'minipuck', qty: 1, room: room, group: room,
        why: 'A small puck that plugs straight into a wall outlet. Presence and movement only. It catches anyone passing through, which is how you know about wandering between rooms at night.',
        skip: 'If ' + who + ' doesn’t wander at night, the hallway can wait.'
      });
    });

    var wantBath = a.rooms.bathroom || a.ensuite;
    if (wantBath) {
      lines.push({
        sku: 'bathroom', qty: 1, optional: !a.rooms.bathroom && a.level !== 'high',
        room: a.ensuite ? n + '’s bathroom' : 'Bathroom', group: a.ensuite ? n + '’s bathroom' : 'Bathroom',
        why: 'Humidity and movement. It knows a shower from a visit, and a visit that runs long.',
        skip: 'If showers and long visits aren’t a concern, this one can wait.'
      });
    }

    lines.push({
      sku: 'fall', qty: a.floors || 1, room: (a.floors || 1) > 1 ? 'One per floor' : 'Main floor', group: 'The whole home',
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
    lines = lines.map(function (l) {
      var prod = PRODUCTS[l.sku];
      var key = prod.family + '|' + l.room;
      var out = {
        key: key, sku: l.sku, name: prod.name, price: prod.price, qty: l.qty,
        room: l.room, group: l.group, family: prod.family, why: l.why, skip: l.skip || '', optional: !!l.optional,
        selected: (key in sel) ? !!sel[key] : !l.optional
      };
      if (out.selected && out.price != null) total += out.price * out.qty;
      return out;
    });

    /* Group lines by room, in order of first appearance. */
    var groups = [];
    lines.forEach(function (l) {
      var g = groups.filter(function (x) { return x.name === l.group; })[0];
      if (!g) { g = { name: l.group, lines: [], subtotal: 0 }; groups.push(g); }
      g.lines.push(l);
      if (l.selected && l.price != null) g.subtotal += l.price * l.qty;
    });

    return { lines: lines, groups: groups, notes: notes, total: total };
  }

  var api = { PRODUCTS: PRODUCTS, defaults: defaults, recommend: recommend, levelCopy: levelCopy, pronouns: pronouns };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.WPKit = api;
})(typeof window !== 'undefined' ? window : globalThis);
