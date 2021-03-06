var expect = require('chai').expect;
var musicjson2abc = require('../../index.js');

it("correctly converts rests", function() {
  var json = {
    "id": "123456",
    "attributes": {
      "divisions": 8,
      "clef": {"sign": "G", "line": 2},
      "key": {"fifths": -1},
      "time": {"beats": 3, "beat-type": 4}
    },
    "measures": []
  };
  var measure = {
    "attributes": {
      "repeat": {"left": false, "right": false}
    },
    "notes": []
  };
  var note1 = {
    "type": "16th",
    "duration": 2,
    "rest": true,
    "pitch": {"step": "C", "octave": 5, "alter": 0}
  },
  note2 = {
    "type": "16th",
    "duration": 3,
    "rest": true,
    "pitch": {"step": "C", "octave": 5, "alter": 0},
    "dot": true
  },
  note3 = {
    "type": "eighth",
    "duration": 4,
    "rest": true,
    "pitch": {"step": "C", "octave": 5, "alter": 0}
  },
  note4 = {
    "type": "eighth",
    "duration": 6,
    "rest": true,
    "pitch": {"step": "C", "octave": 5, "alter": 0},
    "dot": true
  },
  note5 = {
    "type": "quarter",
    "duration": 8,
    "rest": true,
    "pitch": {"step": "C", "octave": 5, "alter": 0}
  },
  note6 = {
    "type": "quarter",
    "duration": 12,
    "rest": true,
    "pitch": {"step": "C", "octave": 5, "alter": 0},
    "dot": true
  },
  note7 = {
    "type": "half",
    "duration": 16,
    "rest": true,
    "pitch": {"step": "C", "octave": 5, "alter": 0}
  },
  note8 = {
    "type": "half",
    "duration": 24,
    "rest": true,
    "pitch": {"step": "C", "octave": 5, "alter": 0},
    "dot": true
  },
  note9 = {
    "type": "whole",
    "duration": 32,
    "rest": true,
    "pitch": {"step": "C", "octave": 5, "alter": 0}
  },
  note10 = {
    "type": "whole",
    "duration": 48,
    "rest": true,
    "pitch": {"step": "C", "octave": 4, "alter": 0},
    "dot": true
  };


  measure.notes.push(note1, note2, note3, note4, note5, note6, note7, note8, note9, note10);

  json.measures.push(measure);

  var correctAbc = musicjson2abc.json2abc(json);
  expect(correctAbc).to.equal("X:1\nT:123456\nM:3/4\nL:1/32\nK:F\nK:treble\nz2z2>z8z4>z16z8>z32z16>z64z32>|");
});
