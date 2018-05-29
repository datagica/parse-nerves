# Parse Nerves

If a nerve, license or copyright is missing you can create a pull request

## Installation

    $ npm i @datagica/parse-nerves

## Usage

Example:

```javascript
await parse('Dr Grey suspects it has to do with the pterygopalatine ganglion')
```

Output:

```json
[
  {
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
  }
]
```
