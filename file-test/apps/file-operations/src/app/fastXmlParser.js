const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");

const xml = `
<bookstore>
  <book category="cooking">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>
  <book category="children">
    <title lang="en">Harry Potter</title>
    <author>J.K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>
</bookstore>
`;



const parser = new XMLParser();
let jObj = parser.parse(xml);
let jobjS=JSON.stringify(jObj)
console.log(jObj)
console.log("jobjS===>",jobjS)
const builder = new XMLBuilder();
const xmlContent = builder.build(jObj);
console.log("xmlContent===>",xmlContent)