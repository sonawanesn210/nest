/* import { Injectable } from '@nestjs/common';
//const fs = require('fs');
import {promises as fs} from "fs"

@Injectable()
export class AppService {
  async createXmlFile(filename: string, xmlData: string) {
    try {
      console.log(typeof xmlData,"xmlData===>", xmlData)
      if (typeof xmlData !== 'string') {
        xmlData = String(xmlData);
      }

      console.log("typeof after stringify",typeof xmlData)
      const data = JSON.stringify(xmlData);
      console.log("data===>",data)
       await fs.writeFile(`${filename}.xml`, data);
      console.log(`File ${filename}.xml created`); 
    //fs.writeFileSync(`${filename}.xml`, xmlData);
    //console.log('The file has been saved!');
      return { message: `File ${filename}.xml created`, data: data };
    } catch (error) {
      console.error(error);
      throw new Error('Could not create file');
    }
  }
  async getXmlFile(filename: string) {
    try {
      const data = await fs.readFile(`${filename}.xml`);
      console.log(data)
      console.log("dataType",typeof data)
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Could not read file');
    }
  }
} */
 
////////////////////////////////////////////////////////////

  

 /*  async createXmlFile(filename: string, xmlData: string) {
    try {
      console.log(typeof xmlData,"xmldata===>",xmlData);

      //const trimmedData = xmlData.trim();
      //const data = JSON.stringify(xmlData);
     // console.log(typeof data,"data",data)
       //var cleanedString = xmlData.replace("\\ufeff", "");
      const parsedData = await xml2js.parseStringPromise(xmlData);
       const data = JSON.stringify(parsedData);
      console.log(typeof data,"data===>",parsedData);
      await fs.writeFile(`${filename}.xml`, parsedData);
      console.log(`File ${filename}.xml created`, parsedData);
      return { message: `File ${filename}.xml created`, data: parsedData };
    } catch (error) {
      console.error(error);
      throw new Error('Could not create file');
    }
  }
  
  async getXmlFile(filename: string) {
    try {
      const data = await fs.readFile(`${filename}.xml`);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Could not read file');
    }
  }
} 


 */

/* async createXmlFile(filename: string, xmlData: string) {
  try {
    console.log(typeof xmlData,"xmldata===>",xmlData);

    //const trimmedData = xmlData.trim();
   // const data = JSON.stringify(xmlData);
    // var cleanedString = xmlData.replace("\\ufeff", "");
    const parsedData = xml2js.parseString(xmlData, (err, result) => {
      if (err) {
          console.log("err",err);
      } else {
          const bpmnXML = builder.buildObject(result);
          fs.writeFileSync('finalBpmnXml.xml', (bpmnXML));
          console.log("file has been saved",bpmnXML);
      }
  });
    //  const data = JSON.stringify(parsedData);
    // console.log(typeof data,"data===>",data);
    // await fs.writeFile(`${filename}.xml`, data);
    // console.log(`File ${filename}.xml created`, data); 
    return { message: `File ${filename}.xml created`, data: parsedData };
  } catch (error) {
    console.error(error);
    throw new Error('Could not create file');
  }
}
 */


/* import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  private readonly XML_FOLDER_PATH = './xml-data';

  async saveXml(xmlData: string, fileName: string): Promise<string> {
    const filePath = `${this.XML_FOLDER_PATH}/${fileName}.xml`;
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, JSON.stringify(xmlData), (err) => {
        if (err) {
          console.error(`Error writing XML file: ${err}`);
          reject(err);
        }
        console.log(`XML file saved at ${filePath}`);
        resolve('XML data saved successfully');
      });
    });
  }
}
 */


//[object,object] below////////////
  /* async createXmlFile(filename: string, xmlData: any) {
    try {
      if (typeof xmlData !== 'string'){
        // Parse the xmlData object as an XML string
        xmlData = String(xmlData)
        console.log("String===>" ,xmlData, typeof xmlData)
      }
        let cleanXml = xmlData.replace(/^[^<]+/, ''); 
        cleanXml = await parseStringPromise(cleanXml, { explicitArray: false, explicitRoot: false });
        // Convert the parsed XML back to a string
        cleanXml = JSON.stringify(cleanXml);
      
      await fs.writeFile(`${filename}.xml`, xmlData);
      console.log(`File ${filename}.xml created`);
      return { message: `File ${filename}.xml created`, data: xmlData };
    } catch (error) {
      console.error(error);
      throw new Error('Could not create file');
    }
  } */

/* {
  "fileName":"data.xml",
  "xmlData":"<example>Some XML data</example>"
} */

// works but returns empty object
   /* async createXmlFile(filename: string, xmlData: any) {
    try {
      console.log("xmlData===>",xmlData)
      if (typeof xmlData !== 'string') {
        xmlData = JSON.stringify(xmlData);
      }
      console.log("xmldata after sringify===>" , xmlData)
  
      await fs.writeFile(`${filename}.xml`, xmlData);
  console.log("xmlData after await===>",xmlData)
      console.log(`File ${filename}.xml created`);
  
      return { message: `File ${filename}.xml created`, data: xmlData };
    } catch (error) {
      console.error(error);
      throw new Error('Could not create file');
    }
  }   */



//object object


/*  async createXmlFile1(filename: string, xmlData: any) {
    try {
      if (typeof xmlData !== 'string'){
        // Parse the xmlData object as an XML string
        xmlData = String(xmlData)
        console.log("String===>" ,xmlData, typeof xmlData)
      }
        let cleanXml = xmlData.replace(/^[^<]+/, ''); 
        console.log("cleanXml1=====>",cleanXml)
        cleanXml = await parseStringPromise(cleanXml, { explicitArray: false, explicitRoot: false });
        // Convert the parsed XML back to a string
        cleanXml = JSON.parse(JSON.stringify(cleanXml));
      console.log("cleanXml=====>",typeof cleanXml)
      await fs.writeFile(`${filename}.xml`, xmlData);
      console.log(`File ${filename}.xml created`);
      return { message: `File ${filename}.xml created`, data: xmlData };
    } catch (error) {
      console.error(error);
      throw new Error('Could not create file');
    }
  }   */

  //fast
  /*import { Controller, Get } from '@nestjs/common';import * as fastXmlParser from 'fast-xml-parser';import * as fs from 'fs';
@Controller('xml')export class XmlController {
@Get()
generateXmlFile() {
const xmlString = `<root>
<item id="1">Item 1</item>
<item id="2">Item 2</item>
<item id="3">Item 3</item>
</root>`;

const jsonObj = fastXmlParser.parse(xmlString);
const xmlOutput = fastXmlParser.parse(jsonObj, {
ignoreAttributes: false,
attributeNamePrefix: '',
format: true,
indentBy: '',
supressEmptyNode: false,
});
fs.writeFile('output.xml', xmlOutput, (err) => {
if (err) {
console.error(err);
   } else {
    console.log('XML file written successfully');
   }
  });

  return 'XML file generated';
 }
}*/

//create service1
/*  async createXmlFile_xmljs(filename: string, xmlData: any) {
        try {
            console.log("Input XML data:", xmlData,typeof xmlData);
             if (typeof xmlData !== 'string') {
              xmlData = JSON.stringify(xmlData);
            } 
            console.log("StringXmlData===>",xmlData,"typeof====>" ,typeof xmlData)
            // Convert the JSON object back to XML
            const jsonObj = JSON.parse(xmlData);
            console.log("json====>",jsonObj)
            const convertedXml = js2xml(jsonObj, {compact: true, ignoreComment: true, spaces: 4});
        
            console.log("Converted XML:", convertedXml);
        
            // Write the XML to the file
             fs.writeFile(`${filename}.xml`, convertedXml);
            console.log(`File ${filename}.xml created`);
        
            return { message: `File ${filename}.xml created`, data: xmlData };
          } catch (error) {
            console.error(error);
            throw new Error("Could not create file");
          }
        }
    } */