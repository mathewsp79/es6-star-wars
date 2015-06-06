// Rest params
function containsAll(haystack, ...needles) {
  for (let needle of needles) {
    if (haystack.indexOf(needle) === -1) {
      return false;
    }
  }

  return true;
}

console.log(containsAll('pizza Pie', 'z', 'Pie'));
// true

console.log(containsAll('pizza Pie', 'z', 'pie'));
// false (case sensitive)

console.log(containsAll('pizza Pie', 'z', 'whoa'));
// false

function outtaMyFace(item1 = 'corn', item2 = 'face') {
  return `Get that ${item1} outta my ${item2}!`;
}


function outtaMyFace2(
  item1 = 'corn',
  item2 = (item1 === 'gum' ? 'hair' : 'face'))
{
  return `Get that ${item1} outta my ${item2}!`;
}

console.log('outtaMyFace', outtaMyFace());
// Get that corn outta my face

console.log('outtaMyFace2', outtaMyFace2('gum'));
// Get that gum outta my hair

console.log('outtaMyFace2', outtaMyFace2('pizza'));
// Get that pizza outta my face
