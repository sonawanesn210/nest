//import * as xmlJs from 'xml-js';
const xmlJs = require('xml-js')

async function xmlToJson(xml) {
  const json = xmlJs.xml2json(xml, { compact: true, spaces: 2 });
  return JSON.parse(json);
}

async function jsonToXml(json) {
  const options = { compact: true, ignoreComment: true, spaces: 2 };
  const xml = xmlJs.json2xml(json, options);
  return xml;
}

// Usage
const xml = '<root><name>John Doe</name></root>';

const json =  xmlToJson(xml);
console.log(json); // { "root": { "name": "John Doe" } }

const xml2 =  jsonToXml(json);
console.log(xml2); // <root>\n  <name>John Doe</name>\n</root>\n




//xml2js


/* import { parseStringPromise, Builder } from 'xml2js';

async function createXmlFile1(filename: string, xmlData: any) {
  try {
    console.log('Input XML data:', xmlData);

    if (typeof xmlData !== 'string') {
      // Convert the XML object to a string
      const builder = new Builder();
      xmlData = builder.buildObject(xmlData);
    }

    // Parse the XML string into a JSON object
    const parsedXml = await parseStringPromise(xmlData, {
      explicitArray: false,
      explicitRoot: false,
    });
    console.log('Parsed XML:', parsedXml);

    // Convert the parsed JSON back to XML
    const builder = new Builder();
    const convertedXml = builder.buildObject(parsedXml);
    console.log('Converted XML:', convertedXml);

    // Write the XML to the file
    await fs.writeFile(`${filename}.xml`, convertedXml);
    console.log(`File ${filename}.xml created`);

    return { message: `File ${filename}.xml created`, data: xmlData };
  } catch (error) {
    console.error(error);
    throw new Error('Could not create file');
  }
} */



//xml-js

/* import { parse } from 'xml-js';

async function createXmlFile1(filename: string, xmlData: any) {
  try {
    console.log('Input XML data:', xmlData);

    if (typeof xmlData !== 'string') {
      // Convert the xmlData object to JSON
      xmlData = JSON.stringify(xmlData);
    }

    // Parse the XML string into a JSON object
    const parsedXml = JSON.parse(xmlData);
    console.log('Parsed XML:', parsedXml);

    // Convert the parsed JSON back to XML
    const convertedXml = parse(parsedXml, {
      compact: true,
      ignoreComment: true,
      spaces: 4,
    });
    console.log('Converted XML:', convertedXml);

    // Write the XML to the file
    await fs.writeFile(`${filename}.xml`, convertedXml);
    console.log(`File ${filename}.xml created`);

    return { message: `File ${filename}.xml created`, data: xmlData };
  } catch (error) {
    console.error(error);
    throw new Error('Could not create file');
  }
} */
