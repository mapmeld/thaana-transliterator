Thaana Transliterator JS
============================

Transliterates text in (Divehi language / Thaana script, from the Maldives) to Latin alphabet.

Based on this PHP code: https://github.com/naxeem/thaana-transliterator

## Install from NPM

#### Command line tool

```
npm install thaana -g
thaana-transliterator filename.txt
```

#### Module

```npm install thaana --save```

## Usage

```javascript
const transliterator = require('thaana');
transliterator('ހުރިހާ އިންސާނުން ވެސް އުފަންވަނީ، ދަރަޖައާއި ޙައްޤުތަކުގައި މިނިވަންކަމާއި ހަމަހަމަކަން ލިބިގެންވާ ބައެއްގެ ގޮތުގައެވެ. އެމީހުންނަށް ހެޔޮވިސްނުމާއި، ހެޔޮ ބުއްދީގެ ބާރު ލިބިގެންވެއެވެ. އަދި އެމީހުން އެކަކު އަނެކަކާ މެދު މުޢާމަލާތް ކުރަންވަނީ، އުޚުއްވަތްތެރި ކަމުގެ ރޫޙެއްގައެވެ.');
> "Hurihaa insaanun ves ufanvanee, dharajaaai hahquthakugai minivankamaai hamahamakan libigenvaa baehge gothugaeve. Emeehunnah heyovisnumaai, heyo buhdheege baaru libigenveeve. Adhi emeehun ekaku anekakaa medhu muaamalaai kuranvanee, ukhuhvaitheri kamuge roohehgaeve."
```

## Contributing
Anyone is welcome to improve this.

GPL-2.0 license (same as PHP source)
