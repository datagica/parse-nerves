const parse = require('./index')

const testData = [{
  input: "In this paper we are studying the diagonal band of Broca, which we prove that..",
  expected: [{
    "ngram": "diagonal band of Broca",
    "value": {
      "id": "diagonal-band-of-broca",
      "label": {
        "en": "Diagonal band of Broca"
      },
      "description": {
        "en": "Diagonal band of Broca"
      },
      "category": "nerve",
      "aliases": {
        "en": [
          "Diagonal band of Broca",
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 7,
      "begin": 34,
      "end": 56
    }
  }]
}, {
  input: "Dr Grey suspects it has to do with the pterygopalatine ganglion",
  expected: [{
    "ngram": "pterygopalatine ganglion",
    "value": {
      "id": "pterygopalatine-ganglion",
      "label": {
        "en": "Pterygopalatine ganglion"
      },
      "description": {
        "en": "Pterygopalatine ganglion"
      },
      "category": "nerve",
      "aliases": {
        "en": [
          "Pterygopalatine ganglion",
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 9,
      "begin": 39,
      "end": 63
    }
  }]
}]

test('extract nerves', () => Promise.all(
  testData.map(async ({ input, expected }) => expect(await parse(input)).toEqual(expected))
))