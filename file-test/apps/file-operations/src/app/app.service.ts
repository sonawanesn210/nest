
// import { promises as fs } from 'fs';
// import { parseStringPromise } from 'xml2js';
// import * as xml2js from 'xml2js';
// import { parse } from 'js2xmlparser';

import { Injectable } from '@nestjs/common';
const { XMLParser, XMLBuilder } = require("fast-xml-parser");
const fs = require("fs/promises");
//import { create as XMLBuilder } from 'xmlbuilder2';
@Injectable()
export class AppService {
  // below code creats a file {} //newtesting11
 /*  async createXmlFile(filename: string, xmlData: any) {
    try {
   
if (typeof xmlData !== 'string') {
        xmlData = JSON.stringify(xmlData);
      }
      let cleanXml = xmlData.replace(/^[^<]+/, '');
    
      console.log('Clean XML:', cleanXml);
  
      // Parse the XML string into a JSON object
      const parsedXml = await parseStringPromise(cleanXml, {
        explicitArray: false,
        explicitRoot: false,
      });
      console.log('Parsed XML:', parsedXml);
  
      // Convert the parsed JSON back to XML
      const convertedXml = parse('root', parsedXml);
      console.log('Converted XML:', convertedXml);
  
      // Write the XML to the file
     //  fs.writeFile(`${filename}.xml`, convertedXml);
     // console.log(`File ${filename}.xml created`);
      xml2js.parseString(convertedXml, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          const builder = new xml2js.Builder();
          const newXmlString = builder.buildObject(result);
           fs.writeFile(`${filename}.xml`, convertedXml);
          console.log(`File ${filename}.xml created`);
      } 
        });
      return { message: `File ${filename}.xml created`, data: xmlData };
    } catch (error) {
      console.error(error);
      throw new Error('Could not create file');
    }
  }  */

 /*  
  async createXmlFile(filename: string, xmlData: any) {
    try {
      console.log("Input XML data:", xmlData);
      if (typeof xmlData !== 'string') {
        xmlData = JSON.stringify(xmlData);
      }
      console.log("StringXmlData===>",xmlData,"typeof====>" ,typeof xmlData)
      // Use the fast-xml-parser library to parse the XML string into a JSON object
      const parser = new XMLParser();
      const jsonObj = parser.parse(xmlData);
  console.log("jsonObj===>",jsonObj)
      // Convert the JSON object back to XML
      const builder = new XMLBuilder({
        version: '1.0',
        encoding: 'UTF-8',
      });
      const convertedXml = builder.build(jsonObj, {xmldec: {version: '1.0', encoding: 'UTF-8'}});
  
      console.log("Converted XML:", convertedXml);
  
      // Write the XML to the file
      await fs.writeFile(`${filename}.xml`, convertedXml);
      console.log(`File ${filename}.xml created`);
  
      return { message: `File ${filename}.xml created`, data: xmlData };
    } catch (error) {
      console.error(error);
      throw new Error("Could not create file");
    }
  }
   */


  

  async createXmlFile(filename: string, xmlData: any) {
    try {
      console.log('Input XML data:', xmlData);
      
      // Check if the xmlData is not a string, then convert it to a string
      if (typeof xmlData !== 'string') {
        xmlData = JSON.stringify(xmlData);
      }
      
      // Add XML declaration to input string
      xmlData = `<?xml version="1.0" encoding="UTF-8"?>${xmlData}`;
      
      // Use the fast-xml-parser library to parse the XML string into a JSON object
      const parser = new XMLParser();
      const jsonObj = parser.parse(xmlData);
      
      // Convert the JSON object back to XML
      const builder = new XMLBuilder({
        version: '1.0',
        encoding: 'UTF-8',
      });
      const convertedXml = builder.build(jsonObj, {xmldec: {version: '1.0', encoding: 'UTF-8'}});
      
      console.log('Converted XML:', convertedXml);
      
      // Write the XML to the file
      await fs.writeFile(`${filename}.xml`, convertedXml);
      console.log(`File ${filename}.xml created`);
      
      return { message: `File ${filename}.xml created`, data: convertedXml.replace('{&quot;xmlData&quot;:&quot;', '') };
    } catch (error) {
      console.error(error);
      throw new Error('Could not create file');
    }
  }
  

  //creats a file but file with correct data for small data 
    /*  async createXmlFile1(filename: string, xmlData: any) {
    try {
      console.log('Input XML data:', xmlData);
  
      if (typeof xmlData !== 'string') {
        // Parse the xmlData object as an XML string
        xmlData = JSON.stringify(xmlData);
      }
  
      // Remove any non-XML characters at the beginning of the string
    let cleanXml = xmlData.replace(/^[^<]+/, '');
   // let cleanXml = xmlData.replace(/^[\s\S]*?</, '<');
    
      console.log('Clean XML:', cleanXml);

     // cleanXml = cleanXml.replace(/[\u0000-\u001f]+/g, '');
     cleanXml = cleanXml.replace(/[^\n]/g, '');

cleanXml = cleanXml.trim();
console.log('new Clean XML:', cleanXml)
  
      // Parse the XML string into a JSON object
      const parsedXml = await parseStringPromise(cleanXml, {
        explicitArray: false,
        explicitRoot: false,
      });
      console.log('Parsed XML:', parsedXml);
  
      // Convert the parsed JSON back to XML
      const convertedXml = parse('root', parsedXml);
      console.log('Converted XML:', convertedXml);
  
      // Write the XML to the file
      await fs.writeFile(`${filename}.xml`, convertedXml);
      console.log(`File ${filename}.xml created`);
  
      return { message: `File ${filename}.xml created`, data: xmlData };
    } catch (error) {
      console.error(error);
      throw new Error('Could not create file');
    }
  }  
  */
  async getXmlFile(filename: string) {
    try {
      const data = await fs.readFile(`${filename}.xml`);
      console.log(data)
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Could not read file');
    }
  }
}

 





















