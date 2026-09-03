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
    mat:           { name: 'Pressure mat',                       price: 49, family: 'mat' },
    door:          { name: 'Door sensor',                        price: 19, family: 'door' },
    living_base:   { name: 'Living-space sensor',                price: 49, family: 'living' },
    living_stone:  { name: 'Living-space sensor, stone',         price: 59, family: 'living' },
    living_plant:  { name: 'Living-space sensor, plant',         price: 59, family: 'living' },
    bathroom:      { name: 'Bathroom sensor',                    price: 29, family: 'bathroom' }
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

  function defaults() {
    return {
      person: { name: '', relationship: 'mother', pronouns: 'she' },
      lives: 'nearby',
      others: 0,
      pets: [],
      rooms: { kitchen: true, living: true, bathroom: false, other: [] },
      floors: 1,
      sharesBed: false,
      ensuite: false,
      level: 'medium',
      style: { bedroom: 'base', living: 'base' }
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
        body: 'That is normal for ' + p.obj + '. Sometimes ' + p.subj + ' forget' + p.s + ' and go' + (p.s ? 'es' : '') + ' downstairs.'
      },
      high: {
        title: 'High',
        lede: 'When in bed, ' + n + ' should be asleep.',
        body: 'I want to know if ' + p.subj + ' get' + p.s + ' up more than a routine bathroom break. ' + cap(p.subj) + ' should not be turning lights on or taking a shower in the middle of the night. We want to know any time ' + p.subj + ' leave' + p.s + ' ' + p.poss + ' room.'
      }
    };
  }

  /* Build the kit. Returns { lines, notes, total }.
   * A line: { sku, name, price, qty, room, why, optional }.
   * Optional lines are shown but not counted in the total.
   */
  function recommend(a) {
    var n = a.person.name || 'Mom';
    var p = pronouns(a.person.pronouns);
    var lines = [];
    var notes = [];
    var bedsides = a.sharesBed ? 2 : 1;
    var bedroom = n + '’s bedroom';
    var bedSku = 'bedroom_' + (a.style.bedroom || 'base');
    var livSku = 'living_' + (a.style.living || 'base');

    lines.push({
      sku: bedSku, qty: bedsides, room: bedroom,
      why: bedsides === 2
        ? 'One per bedside. Each reads breathing and heart micro-motion for the person on its side, so two sleepers never blur into one.'
        : 'Reads breathing and heart micro-motion, so it knows asleep from gone. Nothing else in the kit can.'
    });

    lines.push({
      sku: 'mat', qty: bedsides, room: bedroom, optional: a.level === 'low',
      why: bedsides === 2
        ? 'One strip per side, where the feet land. The only sensor that knows someone stood up.'
        : 'A strip where ' + p.poss + ' feet land. The only sensor that knows ' + p.subj + ' stood up.'
    });

    lines.push({
      sku: 'door', qty: 1, room: bedroom,
      why: 'Hears the bedroom door open, so “left the room” is never a guess.'
    });

    if (a.level !== 'low' && (a.rooms.kitchen || a.floors > 1)) {
      lines.push({
        sku: 'door', qty: 1, room: a.floors > 1 ? 'Top of the stairs or kitchen door' : 'Kitchen door',
        why: 'Turns “left the room” into “went downstairs” at 3 a.m. That is the one you asked about.'
      });
    }

    var livingRooms = [];
    if (a.rooms.kitchen) livingRooms.push('Kitchen');
    if (a.rooms.living) livingRooms.push('Living room');
    (a.rooms.other || []).forEach(function (r) { if (r && r.trim()) livingRooms.push(r.trim()); });
    livingRooms.forEach(function (room, i) {
      lines.push({
        sku: livSku, qty: 1, room: room,
        why: i === 0
          ? 'Presence and movement only. It does not read breathing or heart rate, and it does not need to. It knows the room is in use.'
          : 'Presence and movement only.'
      });
    });

    var wantBath = a.rooms.bathroom || (a.ensuite && a.level === 'high');
    if (wantBath) {
      lines.push({
        sku: 'bathroom', qty: 1, optional: a.ensuite && a.level !== 'high' && !a.rooms.bathroom,
        room: a.ensuite ? n + '’s bathroom' : 'Bathroom',
        why: 'Humidity and movement. It knows a shower from a visit, and a visit that runs long.'
      });
    }

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
    lines = lines.map(function (l) {
      var prod = PRODUCTS[l.sku];
      var out = {
        sku: l.sku, name: prod.name, price: prod.price, qty: l.qty,
        room: l.room, why: l.why, optional: !!l.optional
      };
      if (!out.optional) total += out.price * out.qty;
      return out;
    });

    return { lines: lines, notes: notes, total: total };
  }

  var api = { PRODUCTS: PRODUCTS, defaults: defaults, recommend: recommend, levelCopy: levelCopy, pronouns: pronouns };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.WPKit = api;
})(typeof window !== 'undefined' ? window : globalThis);
