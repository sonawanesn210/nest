import { Injectable } from '@nestjs/common';
const fs = require("fs/promises");
import { xml2json, json2xml } from 'xml-js';
//import {promises as fs} from "fs"
import { promisify } from 'util';
interface XmlData {
    root: {
      [key: string]: any;
    };
  }
 /*  another option
  type XmlData = {
    root: {
      [key: string]: any;
    };
  }; */
  

@Injectable()
export class AppService1 {


   

    async createXmlFile_xmljs(filename: string, inputData: any) {
        try {
            console.log("inputData====>",inputData)
          // We are Extracting the XML string from the input object
          const xmlData = inputData.xmlData;
          console.log("Input XML data:", xmlData, typeof xmlData);
          
          // We are Converting the XML string to a JSON object
          const jsonObj =xml2json(xmlData, { compact: true, spaces: 2 });
          console.log("Converted JSON:", jsonObj);
          
      
          // We are Converting the JSON object back to XML
          const convertedXml = json2xml(jsonObj, { compact: true, ignoreComment: true, spaces: 4 });
      
          console.log("Converted XML:", convertedXml);
      
          // Write the XML to the file
          await fs.writeFile(`${filename}.xml`, convertedXml);
          console.log(`File ${filename}.xml created`);
      
          return { message: `File ${filename}.xml created`, data: convertedXml };
        } catch (error) {
          console.error(error);
          throw new Error("Could not create file");
        }
      }


// Get all data of file
      async getXmlFile_xmljs(filename: string) {
        try {
          const data = await fs.readFile(`${filename}.xml`);
          console.log(data)
          return data;
        } catch (error) {
          console.error(error);
          throw new Error('Could not read file');
        }
      }


      // update data 
   

      async  updateXmlFile_xmljs(filename: string, inputData: XmlData) {
        try {
          // Read the XML data from the file
          const xmlData = await fs.readFile(`${filename}.xml`, 'utf-8');
      
          // Remove any leading or trailing whitespace characters from the XML data
          //const trimmedXmlData = xmlData.trim();
      
          // Convert the XML data to a JavaScript object
          const jsonData = xml2json(xmlData, { compact: true, spaces: 2 });
          const jsonObj = JSON.parse(jsonData);
      
          // Update the values in the JavaScript object based on the input data
          const inputDataRootKeys = Object.keys(inputData.root);
          for (let i = 0; i < inputDataRootKeys.length; i++) {
            const key = inputDataRootKeys[i];
            const value = inputData.root[key];
      
            if (typeof jsonObj.root[key] !== 'undefined') {
              if (typeof value === 'object') {
                // If the value is an object, we need to update each key-value pair in the object
                const valueKeys = Object.keys(value);
                for (let i = 0; i < valueKeys.length; i++) {
                  const nestedKey = valueKeys[i];
                  const nestedValue = value[nestedKey];
                  jsonObj.root[key][nestedKey]._text = nestedValue;
                }
              } else {
                // If the value is not an object, we can update it directly
                jsonObj.root[key]._text = value;
              }
            }
          }
      
          // Convert the updated JavaScript object back to XML
          const updatedXmlData = json2xml(jsonObj, { compact: true, spaces: 4 });
      
          // Write the updated XML to the file
          await fs.writeFile(`${filename}.xml`, updatedXmlData);
      
          console.log(`File ${filename}.xml updated with new element`);
      
          return { message: `File ${filename}.xml updated with new element`, data: updatedXmlData };
        } catch (error) {
          console.error(error);
          throw new Error('Could not update file');
        }
      }
      

 /*  async editWord(filePath: string, oldWord: string, newWord: string): Promise<void> {
    const readFile = promisify(fs.readFile); 
    const writeFile = promisify(fs.writeFile); 
    try { 
      const data = await readFile(filePath, 'utf-8');
       const regex = new RegExp(`\\b${oldWord}\\b`, 'g'); 
       const newData = data.replace(regex, newWord); 
       await writeFile(filePath, newData, 'utf-8'); 
      } 
      catch (err) { throw new Error(`Failed to edit word: ${err}`); }
  }
 */
      
    }