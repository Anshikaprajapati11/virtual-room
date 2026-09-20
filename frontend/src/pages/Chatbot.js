import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import './Chatbot.css';
import * as pdfjsLib from 'pdfjs-dist';

// =====================================================
// PDF.JS WORKER
// =====================================================

pdfjsLib.GlobalWorkerOptions.workerSrc =
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;


// =====================================================
// YOUR NOTES STRUCTURE
// =====================================================

const NOTES = [

  // ==================== 3rd SEM ====================

  {
    semester: '3rd Sem',
    subject: 'Digital Systems',
    keywords: [
      'digital',
      'digital system',
      'logic gate',
      'boolean'
    ],
    files: [
      'public/CS NOTES/3rd Sem/Digital Sys/Digital System.pdf',
      'public/CS NOTES/3rd Sem/Digital Sys/Unit 1 - Digital Systems - www.rgpvnotes.in.pdf',
      'public/CS NOTES/3rd Sem/Digital Sys/Unit 2 - Digital Systems - www.rgpvnotes.in.pdf',
      'public/CS NOTES/3rd Sem/Digital Sys/Unit 3 - Digital Systems - www.rgpvnotes.in.pdf',
      'public/CS NOTES/3rd Sem/Digital Sys/Unit 4 - Digital Systems - www.rgpvnotes.in.pdf',
      'public/CS NOTES/3rd Sem/Digital Sys/Unit 5 - Digital Systems - www.rgpvnotes.in.pdf'
    ]
  },

  {
    semester: '3rd Sem',
    subject: 'Discrete Structures',
    keywords: [
      'discrete',
      'discrete structure',
      'set',
      'relation',
      'graph',
      'logic'
    ],
    files: [
      'public/CS NOTES/3rd Sem/DS/Discrete structure.pdf',
      'public/CS NOTES/3rd Sem/DS/Unit 1 - Discrete Structures - www.rgpvnotes.in.pdf',
      'public/CS NOTES/3rd Sem/DS/Unit 2 - Discrete Structures - www.rgpvnotes.in.pdf',
      'public/CS NOTES/3rd Sem/DS/Unit 3 - Discrete Structures - www.rgpvnotes.in.pdf',
      'public/CS NOTES/3rd Sem/DS/Unit 4 - Discrete Structures - www.rgpvnotes.in.pdf',
      'public/CS NOTES/3rd Sem/DS/Unit 5 - Discrete Structures - www.rgpvnotes.in.pdf'
    ]
  },

  {
    semester: '3rd Sem',
    subject: 'Data Structures',
    keywords: [
      'data structure',
      'dsa',
      'array',
      'linked list',
      'stack',
      'queue',
      'tree',
      'graph'
    ],
    files: [
      'public/CS NOTES/3rd Sem/DSA/Data structure (2).pdf',
      'public/CS NOTES/3rd Sem/DSA/Unit 1 - Data Structure - www.rgpvnotes.in (1).pdf',
      'public/CS NOTES/3rd Sem/DSA/Unit 2 - Data Structure - www.rgpvnotes.in (1) (2).pdf',
      'public/CS NOTES/3rd Sem/DSA/Unit 3 - Data Structure - www.rgpvnotes.in (1) (2).pdf',
      'public/CS NOTES/3rd Sem/DSA/Unit 4 - Data Structure - www.rgpvnotes.in (1) (2).pdf',
      'public/CS NOTES/3rd Sem/DSA/Unit 5 - Data Structure - www.rgpvnotes.in (1) (2).pdf'
    ]
  },

  {
    semester: '3rd Sem',
    subject: 'Energy & Environmental Engineering',
    keywords: [
      'energy',
      'environment',
      'environmental',
      'pollution',
      'eee'
    ],
    files: [
      'public/CS NOTES/3rd Sem/EEE/Energy Environment Engineering.pdf',
      'public/CS NOTES/3rd Sem/EEE/Unit_1_Energy_&_Environmental_Engineering_www_rgpvnotes_in.pdf',
      'public/CS NOTES/3rd Sem/EEE/Unit_2_Energy_&_Environmental_Engineering_www_rgpvnotes_in.pdf',
      'public/CS NOTES/3rd Sem/EEE/Unit_3_Energy_&_Environmental_Engineering_www_rgpvnotes_in.pdf',
      'public/CS NOTES/3rd Sem/EEE/Unit_4_Energy_&_Environmental_Engineering_www_rgpvnotes_in.pdf',
      'public/CS NOTES/3rd Sem/EEE/Unit_5_Energy_&_Environmental_Engineering_www_rgpvnotes_in.pdf'
    ]
  },

  {
    semester: '3rd Sem',
    subject: 'OOPM',
    keywords: [
      'oop',
      'oopm',
      'object oriented',
      'class',
      'object',
      'inheritance',
      'polymorphism'
    ],
    files: [
      'public/CS NOTES/3rd Sem/OOPM/OOPM.pdf',
      'public/CS NOTES/3rd Sem/OOPM/Unit_1_Object_Oriented_Programming_and_Methodology_www_rgpvnotes.pdf',
      'public/CS NOTES/3rd Sem/OOPM/Unit_2_Object_Oriented_Programming_and_Methodology_www_rgpvnotes.pdf',
      'public/CS NOTES/3rd Sem/OOPM/Unit_3_Object_Oriented_Programming_and_Methodology_www_rgpvnotes.pdf',
      'public/CS NOTES/3rd Sem/OOPM/Unit_4_Object_Oriented_Programming_and_Methodology_www_rgpvnotes.pdf',
      'public/CS NOTES/3rd Sem/OOPM/Unit_5_Object_Oriented_Programming_and_Methodology_www_rgpvnotes.pdf'
    ]
  },


  // ==================== 4th SEM ====================

  {
    semester: '4th Sem',
    subject: 'Analysis & Design of Algorithms',
    keywords: [
      'ada',
      'algorithm',
      'analysis',
      'sorting',
      'searching',
      'complexity',
      'greedy',
      'dynamic programming'
    ],
    files: [
      'public/CS NOTES/4th Sem/ADA/Ada SHIVANI.pdf',
      'public/CS NOTES/4th Sem/ADA/Unit 1 - Analysis Design of Algorithm - www.rgpvnotes.in.pdf',
      'public/CS NOTES/4th Sem/ADA/Unit 2 - Analysis Design of Algorithm - www.rgpvnotes.in.pdf',
      'public/CS NOTES/4th Sem/ADA/Unit 3 - Analysis Design of Algorithm - www.rgpvnotes.in.pdf',
      'public/CS NOTES/4th Sem/ADA/Unit 4 - Analysis Design of Algorithm - www.rgpvnotes.in.pdf',
      'public/CS NOTES/4th Sem/ADA/Unit 5 - Analysis Design of Algorithm - www.rgpvnotes.in.pdf'
    ]
  },

  {
    semester: '4th Sem',
    subject: 'Computer Organization & Architecture',
    keywords: [
      'coa',
      'computer organization',
      'computer architecture',
      'cpu',
      'memory',
      'cache',
      'instruction'
    ],
    files: [
      'public/CS NOTES/4th Sem/COA/Coa SHIVANI.pdf',
      'public/CS NOTES/4th Sem/COA/Unit_1_Computer_Organization_and_Architecture_www_rgpvnotes_in.pdf',
      'public/CS NOTES/4th Sem/COA/Unit_2_Computer_Organization_and_Architecture_www_rgpvnotes_in.pdf',
      'public/CS NOTES/4th Sem/COA/Unit_3_Computer_Organization_and_Architecture_www_rgpvnotes_in.pdf',
      'public/CS NOTES/4th Sem/COA/Unit_4_Computer_Organization_and_Architecture_www_rgpvnotes_in.pdf',
      'public/CS NOTES/4th Sem/COA/Unit_5_Computer_Organization_and_Architecture_www_rgpvnotes_in.pdf',
      'public/CS NOTES/4th Sem/COA/Unit_6_Computer_Organization_and_Architecture_www_rgpvnotes_in.pdf'
    ]
  },

  {
    semester: '4th Sem',
    subject: 'Operating System',
    keywords: [
      'os',
      'operating system',
      'process',
      'deadlock',
      'scheduling',
      'memory management',
      'paging'
    ],
    files: [
      'public/CS NOTES/4th Sem/OS/SHIVANI Os.pdf',
      'public/CS NOTES/4th Sem/OS/Unit 1 - Operating System - www.rgpvnotes.in.pdf',
      'public/CS NOTES/4th Sem/OS/Unit 2 - Operating System - www.rgpvnotes.in.pdf',
      'public/CS NOTES/4th Sem/OS/Unit 3 - Operating System - www.rgpvnotes.in.pdf',
      'public/CS NOTES/4th Sem/OS/Unit 4 - Operating System - www.rgpvnotes.in.pdf',
      'public/CS NOTES/4th Sem/OS/Unit 5 - Operating System - www.rgpvnotes.in.pdf'
    ]
  },

  {
    semester: '4th Sem',
    subject: 'Software Engineering',
    keywords: [
      'se',
      'software engineering',
      'sdlc',
      'waterfall',
      'agile',
      'testing',
      'software model'
    ],
    files: [
      'public/CS NOTES/4th Sem/SE/SHIVANI se.pdf',
      'public/CS NOTES/4th Sem/SE/Unit 1 - Software Engineering - www.rgpvnotes.in.pdf',
      'public/CS NOTES/4th Sem/SE/Unit 2 - Software Engineering - www.rgpvnotes.in.pdf',
      'public/CS NOTES/4th Sem/SE/Unit 3 - Software Engineering - www.rgpvnotes.in.pdf',
      'public/CS NOTES/4th Sem/SE/Unit 4 - Software Engineering - www.rgpvnotes.in.pdf',
      'public/CS NOTES/4th Sem/SE/Unit 5 - Software Engineering - www.rgpvnotes.in.pdf'
    ]
  },


  // ==================== 5th SEM ====================

  {
    semester: '5th Sem',
    subject: 'DBMS',
    keywords: [
      'dbms',
      'database',
      'normalization',
      'normalisation',
      'sql',
      'transaction',
      'deadlock',
      'join',
      'primary key',
      'foreign key',
      'er diagram'
    ],
    files: [
      'public/CS NOTES/5th Sem/DBMS/Database_Management_Systems_CS502_Shivani_Brocode_Engineering.pdf',
      'public/CS NOTES/5th Sem/DBMS/DBMS only Notes (No slide)(CodeHelp by Babbar) .pdf',
      'public/CS NOTES/5th Sem/DBMS/Unit 1 - Database Management Systems - www.rgpvnotes.in.pdf',
      'public/CS NOTES/5th Sem/DBMS/Unit 2 - Database Management Systems - www.rgpvnotes.in.pdf'
    ]
  },

  {
    semester: '5th Sem',
    subject: 'Cyber Security',
    keywords: [
      'cyber',
      'cyber security',
      'security',
      'attack',
      'malware',
      'phishing',
      'encryption'
    ],
    files: [
      'public/CS NOTES/5th Sem/CYBER SECURITY/Cyber Security (CS503) Shivani (Brocode Engineering).pdf',
      'public/CS NOTES/5th Sem/CYBER SECURITY/Unit 1 - Cyber Security - www.rgpvnotes.in.pdf',
      'public/CS NOTES/5th Sem/CYBER SECURITY/Unit 2 - Cyber Security - www.rgpvnotes.in.pdf',
      'public/CS NOTES/5th Sem/CYBER SECURITY/Unit 3 - Cyber Security - www.rgpvnotes.in.pdf',
      'public/CS NOTES/5th Sem/CYBER SECURITY/Unit 4 - Cyber Security - www.rgpvnotes.in.pdf',
      'public/CS NOTES/5th Sem/CYBER SECURITY/Unit 5 - Cyber Security - www.rgpvnotes.in.pdf'
    ]
  },

  {
    semester: '5th Sem',
    subject: 'Internet & Web Technology',
    keywords: [
      'iwt',
      'internet',
      'web',
      'html',
      'css',
      'javascript',
      'http',
      'web technology'
    ],
    files: [
      'public/CS NOTES/5th Sem/IWT/Internet_and_Web_Technology_CS504_Shivani_Brocode_Engineering.pdf',
      'public/CS NOTES/5th Sem/IWT/Unit 2 - Internet and Web Technology - www.rgpvnotes.in.pdf',
      'public/CS NOTES/5th Sem/IWT/Unit 3 - Internet and Web Technology - www.rgpvnotes.in.pdf',
      'public/CS NOTES/5th Sem/IWT/Unit 4 - Internet and Web Technology - www.rgpvnotes.in.pdf',
      'public/CS NOTES/5th Sem/IWT/Unit 5 - Internet and Web Technology - www.rgpvnotes.in.pdf'
    ]
  },

  {
    semester: '5th Sem',
    subject: 'Theory of Computation',
    keywords: [
      'toc',
      'theory of computation',
      'automata',
      'dfa',
      'nfa',
      'fa',
      'grammar',
      'pda',
      'turing machine'
    ],
    files: [
      'public/CS NOTES/5th Sem/TOC/Theory of Computation (CS501) Shivani (Brocode Engineering).pdf',
      'public/CS NOTES/5th Sem/TOC/Unit 1 - Theory of Computation - www.rgpvnotes.in.pdf',
      'public/CS NOTES/5th Sem/TOC/Unit 1(introduction to automata theory).pdf',
      'public/CS NOTES/5th Sem/TOC/Unit 2 - Theory of Computation - www.rgpvnotes.in.pdf',
      'public/CS NOTES/5th Sem/TOC/Unit 2(types of finite automata).pdf',
      'public/CS NOTES/5th Sem/TOC/Unit 3 - Theory of Computation - www.rgpvnotes.in.pdf',
      'public/CS NOTES/5th Sem/TOC/Unit 3(grammer).pdf',
      'public/CS NOTES/5th Sem/TOC/Unit 4 - Theory of Computation - www.rgpvnotes.in.pdf',
      'public/CS NOTES/5th Sem/TOC/Unit4(push down automata).pdf',
      'public/CS NOTES/5th Sem/TOC/Unit 5 - Theory of Computation - www.rgpvnotes.in.pdf',
      'public/CS NOTES/5th Sem/TOC/Unit 5 turing machine (1).pdf'
    ]
  },


  // ==================== 6th SEM ====================

  {
    semester: '6th Sem',
    subject: 'Compiler Design',
    keywords: [
      'cd',
      'compiler',
      'compiler design',
      'lexer',
      'parser',
      'parsing',
      'syntax analysis'
    ],
    files: [
      'public/CS NOTES/6th Sem/CD/CD SHIVANI.pdf',
      'public/CS NOTES/6th Sem/CD/Unit 1 - Compiler Design - www.rgpvnotes.in.pdf',
      'public/CS NOTES/6th Sem/CD/Unit 2 - Compiler Design - www.rgpvnotes.in.pdf',
      'public/CS NOTES/6th Sem/CD/Unit 3 - Compiler Design - www.rgpvnotes.in.pdf',
      'public/CS NOTES/6th Sem/CD/Unit 4 - Compiler Design - www.rgpvnotes.in.pdf',
      'public/CS NOTES/6th Sem/CD/Unit 5 - Compiler Design - www.rgpvnotes.in.pdf'
    ]
  },

  {
    semester: '6th Sem',
    subject: 'Computer Networks',
    keywords: [
      'cn',
      'computer network',
      'network',
      'tcp',
      'udp',
      'ip',
      'osi',
      'protocol',
      'routing'
    ],
    files: [
      'public/CS NOTES/6th Sem/CN/CN SHIVANI.pdf',
      'public/CS NOTES/6th Sem/CN/Unit 1 - Computer Networks - www.rgpvnotes.in.pdf',
      'public/CS NOTES/6th Sem/CN/Unit 2 - Computer Networks - www.rgpvnotes.in.pdf',
      'public/CS NOTES/6th Sem/CN/Unit 3 - Computer Networks - www.rgpvnotes.in.pdf',
      'public/CS NOTES/6th Sem/CN/Unit 4 - Computer Networks - www.rgpvnotes.in.pdf',
      'public/CS NOTES/6th Sem/CN/Unit 5 - Computer Networks - www.rgpvnotes.in.pdf'
    ]
  },

  {
    semester: '6th Sem',
    subject: 'Machine Learning',
    keywords: [
      'ml',
      'machine learning',
      'regression',
      'classification',
      'clustering',
      'supervised',
      'unsupervised'
    ],
    files: [
      'public/CS NOTES/6th Sem/ML/Machine Learning (CS601) Shivani (Brocode Engineering).pdf',
      'public/CS NOTES/6th Sem/ML/Unit 1 - Machine Learning - www.rgpvnotes.in.pdf',
      'public/CS NOTES/6th Sem/ML/Unit 2 - Machine Learning - www.rgpvnotes.in.pdf',
      'public/CS NOTES/6th Sem/ML/Unit 3 - Machine Learning - www.rgpvnotes.in.pdf',
      'public/CS NOTES/6th Sem/ML/Unit 4 - Machine Learning - www.rgpvnotes.in.pdf',
      'public/CS NOTES/6th Sem/ML/Unit 5 - Machine Learning - www.rgpvnotes.in.pdf'
    ]
  },

  {
    semester: '6th Sem',
    subject: 'Project Management',
    keywords: [
      'pm',
      'project management',
      'project',
      'management',
      'risk',
      'planning'
    ],
    files: [
      'public/CS NOTES/6th Sem/PM/Project Management (CS604) Shivani (Brocode Engineering).pdf',
      'public/CS NOTES/6th Sem/PM/Unit 1 - Project Management - www.rgpvnotes.in.pdf',
      'public/CS NOTES/6th Sem/PM/Unit 2 - Project Management - www.rgpvnotes.in.pdf',
      'public/CS NOTES/6th Sem/PM/Unit 3 - Project Management - www.rgpvnotes.in.pdf'
    ]
  },


  // ==================== 7th SEM ====================

  {
    semester: '7th Sem',
    subject: 'Big Data',
    keywords: [
      'big data',
      'hadoop',
      'mapreduce',
      'hdfs',
      'data'
    ],
    files: [
      'public/CS NOTES/7th Sem/BIG DATA/Big Data Shivani (1).pdf'
    ]
  },

  {
    semester: '7th Sem',
    subject: 'Cryptography & Information Security',
    keywords: [
      'crypto',
      'cryptography',
      'information security',
      'encryption',
      'decryption',
      'rsa',
      'aes'
    ],
    files: [
      'public/CS NOTES/7th Sem/CRYPTO/Cryptography & Information security (1).pdf'
    ]
  },

  {
    semester: '7th Sem',
    subject: 'Data Mining & Warehousing',
    keywords: [
      'data mining',
      'data warehouse',
      'mining',
      'warehouse',
      'association'
    ],
    files: [
      'public/CS NOTES/7th Sem/DATA MIN/DATA MINING AND WAREHOUSING  (1).pdf',
      'public/CS NOTES/7th Sem/DATA MIN/Unit 1 - Data Mining and Warehousing - www.rgpvnotes.in (1).pdf',
      'public/CS NOTES/7th Sem/DATA MIN/Unit 2 - Data Mining and Warehousing - www.rgpvnotes.in.pdf',
      'public/CS NOTES/7th Sem/DATA MIN/Unit 3 - Data Mining and Warehousing - www.rgpvnotes.in.pdf',
      'public/CS NOTES/7th Sem/DATA MIN/Unit 4 - Data Mining and Warehousing - www.rgpvnotes.in.pdf',
      'public/CS NOTES/7th Sem/DATA MIN/Unit 5 - Data Mining and Warehousing - www.rgpvnotes.in.pdf'
    ]
  },

  {
    semester: '7th Sem',
    subject: 'Software Architecture',
    keywords: [
      'software architecture',
      'architecture',
      'design pattern'
    ],
    files: [
      'public/CS NOTES/7th Sem/SW ARCHITEC/Software Architecture Shivani (1).pdf',
      'public/CS NOTES/7th Sem/SW ARCHITEC/Unit 1 - Software Architectures - www.rgpvnotes.in.pdf',
      'public/CS NOTES/7th Sem/SW ARCHITEC/Unit 2 - Software Architectures - www.rgpvnotes.in.pdf',
      'public/CS NOTES/7th Sem/SW ARCHITEC/Unit 3 - Software Architectures - www.rgpvnotes.in.pdf',
      'public/CS NOTES/7th Sem/SW ARCHITEC/Unit 4 - Software Architectures - www.rgpvnotes.in.pdf',
      'public/CS NOTES/7th Sem/SW ARCHITEC/Unit 5 - Software Architectures - www.rgpvnotes.in.pdf'
    ]
  },


  // ==================== 8th SEM ====================

  {
    semester: '8th Sem',
    subject: 'Cloud Computing',
    keywords: [
      'cloud',
      'cloud computing',
      'virtualization',
      'iaas',
      'paas',
      'saas'
    ],
    files: [
      'public/CS NOTES/8th Sem/CLOUD COMP/8th Sem Cloud computing Shivani.pdf',
      'public/CS NOTES/8th Sem/CLOUD COMP/Cloud Computing IMP True Eng_protected (1)_unlocked.pdf',
      'public/CS NOTES/8th Sem/CLOUD COMP/Cloud Computing TE Notes_protected_unlocked (2).pdf',
      'public/CS NOTES/8th Sem/CLOUD COMP/Unit 1 - Cloud Computing.pdf',
      'public/CS NOTES/8th Sem/CLOUD COMP/Unit 2 - Cloud Computing.pdf',
      'public/CS NOTES/8th Sem/CLOUD COMP/Unit 3 - Cloud Computing.pdf',
      'public/CS NOTES/8th Sem/CLOUD COMP/Unit 4 - Cloud Computing.pdf',
      'public/CS NOTES/8th Sem/CLOUD COMP/Unit 5 - Cloud Computing.pdf'
    ]
  },

  {
    semester: '8th Sem',
    subject: 'Computer Vision',
    keywords: [
      'computer vision',
      'image processing',
      'image',
      'vision'
    ],
    files: [
      'public/CS NOTES/8th Sem/COMP VISION/Unit 1 to 5 Computer Vision and Image Processing (1).pdf'
    ]
  },

  {
    semester: '8th Sem',
    subject: 'Internet of Things',
    keywords: [
      'iot',
      'internet of things',
      'sensor',
      'smart device'
    ],
    files: [
      'public/CS NOTES/8th Sem/IOT/8th sem IOT Shivani.pdf',
      'public/CS NOTES/8th Sem/IOT/IOT Complete Notes TRUE ENGINEER_protected_unlocked (1).pdf'
    ]
  }
];


// =====================================================
// NORMALIZE TEXT
// =====================================================

const normalizeText = (text = '') => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};


// =====================================================
// PDF CACHE
// =====================================================

const pdfCache = new Map();


// =====================================================
// PDF TEXT EXTRACTION
// =====================================================

const extractPDFText = async (filePath) => {

  // Use cached PDF if already loaded
  if (pdfCache.has(filePath)) {
    console.log('⚡ Using cached PDF:', filePath);
    return pdfCache.get(filePath);
  }

  try {

    // -------------------------------------------------
    // REMOVE "public/" FROM PATH
    // -------------------------------------------------

    let cleanPath = filePath
      .replace(/^public[\\/]/, '')
      .replace(/\\/g, '/');


    // -------------------------------------------------
    // ENCODE EACH PATH PART
    // -------------------------------------------------

    const encodedPath = cleanPath
      .split('/')
      .map((part) => encodeURIComponent(part))
      .join('/');


    // -------------------------------------------------
    // CREATE FINAL URL
    // -------------------------------------------------

    const url =
      `${window.location.origin}/${encodedPath}`;


    console.log('----------------------------------------');
    console.log('📖 Reading PDF');
    console.log('📁 File:', filePath);
    console.log('🔗 URL:', url);
    console.log('----------------------------------------');


    // -------------------------------------------------
    // FETCH PDF
    // -------------------------------------------------

    const response = await fetch(url, {
      method: 'GET',
      cache: 'no-store'
    });


    // -------------------------------------------------
    // CHECK RESPONSE
    // -------------------------------------------------

    if (!response.ok) {

      console.error(
        `❌ PDF FETCH FAILED: ${response.status} ${response.statusText}`
      );

      console.error(
        '❌ File path:',
        filePath
      );

      console.error(
        '❌ URL:',
        url
      );

      return '';
    }


    // -------------------------------------------------
    // GET ARRAY BUFFER
    // -------------------------------------------------

    const arrayBuffer =
      await response.arrayBuffer();


    if (
      !arrayBuffer ||
      arrayBuffer.byteLength === 0
    ) {

      console.error(
        '❌ PDF is empty:',
        filePath
      );

      return '';
    }


    console.log(
      `📦 PDF downloaded: ${(arrayBuffer.byteLength / 1024).toFixed(2)} KB`
    );


    // -------------------------------------------------
    // LOAD PDF
    // -------------------------------------------------

    const pdf =
      await pdfjsLib.getDocument({
        data: arrayBuffer
      }).promise;


    console.log(
      `📄 PDF loaded successfully: ${pdf.numPages} pages`
    );


    // -------------------------------------------------
    // EXTRACT TEXT FROM ALL PAGES
    // -------------------------------------------------

    let fullText = '';


    for (
      let pageNumber = 1;
      pageNumber <= pdf.numPages;
      pageNumber++
    ) {

      try {

        const page =
          await pdf.getPage(pageNumber);


        const textContent =
          await page.getTextContent();


        const pageText =
          textContent.items
            .map((item) => item.str || '')
            .join(' ');


        fullText +=
          pageText + '\n';


      } catch (pageError) {

        console.error(
          `❌ Error reading page ${pageNumber}:`,
          pageError
        );

      }
    }


    // -------------------------------------------------
    // NO TEXT CHECK
    // -------------------------------------------------

    if (!fullText.trim()) {

      console.warn(
        '⚠️ PDF loaded but no text was extracted:',
        filePath
      );

      return '';
    }


    console.log(
      `✅ Extracted ${fullText.length} characters from:`,
      filePath
    );


    // -------------------------------------------------
    // CACHE RESULT
    // -------------------------------------------------

    pdfCache.set(
      filePath,
      fullText
    );


    return fullText;


  } catch (error) {

    console.error(
      '❌ PDF EXTRACTION ERROR:',
      filePath
    );

    console.error(error);

    return '';
  }
};


// =====================================================
// FIND RELEVANT SUBJECTS
// =====================================================

const findRelevantSubjects = (question) => {

  const input =
    normalizeText(question);


  const results = NOTES
    .map((note) => {

      let score = 0;


      // Keyword matching
      note.keywords.forEach((keyword) => {

        const normalizedKeyword =
          normalizeText(keyword);


        if (
          input.includes(normalizedKeyword)
        ) {

          score +=
            normalizedKeyword.length;
        }

      });


      // Subject name matching
      const normalizedSubject =
        normalizeText(note.subject);


      if (
        input.includes(normalizedSubject)
      ) {

        score += 30;
      }


      return {
        ...note,
        score
      };

    })


    .filter(
      (note) => note.score > 0
    )


    .sort(
      (a, b) =>
        b.score - a.score
    );


  return results;
};


// =====================================================
// FIND RELEVANT TEXT FROM PDF
// =====================================================

const findRelevantText = (
  text,
  question
) => {

  if (
    !text ||
    text.trim().length < 20
  ) {

    return '';
  }


  const normalizedText =
    normalizeText(text);


  const normalizedQuestion =
    normalizeText(question);


  // ---------------------------------------------------
  // STOP WORDS
  // ---------------------------------------------------

  const stopWords = new Set([
    'what',
    'what is',
    'what are',
    'define',
    'definition',
    'explain',
    'explain the',
    'describe',
    'tell',
    'about',
    'give',
    'write',
    'short',
    'note',
    'notes',
    'the',
    'is',
    'are',
    'was',
    'were',
    'how',
    'why',
    'when',
    'where',
    'which',
    'can',
    'could',
    'would',
    'should',
    'does',
    'do',
    'and',
    'for',
    'from',
    'with',
    'this',
    'that',
    'please',
    'me',
    'you',
    'your'
  ]);


  // ---------------------------------------------------
  // QUESTION WORDS
  // ---------------------------------------------------

  const questionWords =
    normalizedQuestion
      .split(' ')
      .filter((word) => {

        return (
          word.length >= 3 &&
          !stopWords.has(word)
        );

      });


  if (
    questionWords.length === 0
  ) {

    return '';
  }


  // ---------------------------------------------------
  // CREATE CHUNKS
  // ---------------------------------------------------

  const words =
    normalizedText.split(' ');


  const chunks = [];


  const CHUNK_SIZE = 100;
  const STEP = 50;


  for (
    let i = 0;
    i < words.length;
    i += STEP
  ) {

    const chunk =
      words
        .slice(
          i,
          i + CHUNK_SIZE
        )
        .join(' ');


    if (
      chunk.length > 80
    ) {

      chunks.push(chunk);
    }
  }


  // ---------------------------------------------------
  // SCORE CHUNKS
  // ---------------------------------------------------

  const scoredChunks =
    chunks.map((chunk) => {

      let score = 0;


      // -----------------------------------------------
      // WORD MATCHING
      // -----------------------------------------------

      questionWords.forEach((word) => {

        // Escape regex special characters
        const escapedWord =
          word.replace(
            /[.*+?^${}()|[\]\\]/g,
            '\\$&'
          );


        const regex =
          new RegExp(
            `\\b${escapedWord}\\b`,
            'g'
          );


        const matches =
          chunk.match(regex);


        if (matches) {

          score +=
            matches.length * 2;
        }

      });


      // -----------------------------------------------
      // EXACT PHRASE BONUS
      // -----------------------------------------------

      if (
        normalizedQuestion.length > 5 &&
        chunk.includes(
          normalizedQuestion
        )
      ) {

        score += 20;
      }


      // -----------------------------------------------
      // TWO-WORD PHRASE BONUS
      // -----------------------------------------------

      for (
        let i = 0;
        i < questionWords.length - 1;
        i++
      ) {

        const phrase =
          `${questionWords[i]} ${questionWords[i + 1]}`;


        if (
          chunk.includes(phrase)
        ) {

          score += 5;
        }
      }


      return {
        chunk,
        score
      };

    });


  // ---------------------------------------------------
  // GET BEST RESULTS
  // ---------------------------------------------------

  const results =
    scoredChunks
      .filter(
        (item) =>
          item.score > 0
      )
      .sort(
        (a, b) =>
          b.score - a.score
      )
      .slice(0, 5);


  if (
    results.length === 0
  ) {

    return '';
  }


  return results
    .map(
      (item) => item.chunk
    )
    .join('\n\n');
};


// =====================================================
// CHATBOT
// =====================================================

const Chatbot = () => {

  const [messages, setMessages] =
    useState([]);


  const [inputMessage, setInputMessage] =
    useState('');


  const [loading, setLoading] =
    useState(false);


  const messagesEndRef =
    useRef(null);


  const idleTimerRef =
    useRef(null);


  // ===================================================
  // AUTO HELP MESSAGE
  // ===================================================

  const sendAutoHelpMessage = () => {

    const hasSentInSession =
      sessionStorage.getItem(
        'autoMsgSent'
      );


    if (!hasSentInSession) {

      const autoMsg = {

        role: 'assistant',

        content:
          'Namaste! 👋 Main aapke academic notes se answers dhoondh sakta hoon. Aap DBMS, OS, DSA, TOC, CN, ML jaise subjects ke questions pooch sakte hain.',

        timestamp:
          new Date()

      };


      setMessages((prev) => [
        ...prev,
        autoMsg
      ]);


      sessionStorage.setItem(
        'autoMsgSent',
        'true'
      );
    }
  };


  // ===================================================
  // AUTO MESSAGE TIMER
  // ===================================================

  useEffect(() => {

    const hasSentInSession =
      sessionStorage.getItem(
        'autoMsgSent'
      );


    if (!hasSentInSession) {

      idleTimerRef.current =
        setTimeout(() => {

          sendAutoHelpMessage();

        }, 1000);

    }


    return () => {

      if (
        idleTimerRef.current
      ) {

        clearTimeout(
          idleTimerRef.current
        );

      }

    };

  }, []);


  // ===================================================
  // SCROLL TO BOTTOM
  // ===================================================

  const scrollToBottom = () => {

    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });

  };


  useEffect(() => {

    scrollToBottom();

  }, [
    messages,
    loading
  ]);


  // ===================================================
  // SEND MESSAGE
  // ===================================================

  const handleSend = async (e) => {

    e.preventDefault();


    if (
      !inputMessage.trim() ||
      loading
    ) {

      return;
    }


    if (
      idleTimerRef.current
    ) {

      clearTimeout(
        idleTimerRef.current
      );
    }


    sessionStorage.setItem(
      'autoMsgSent',
      'true'
    );


    const userText =
      inputMessage.trim();


    setInputMessage('');


    // -------------------------------------------------
    // USER MESSAGE
    // -------------------------------------------------

    setMessages((prev) => [

      ...prev,

      {
        role: 'user',
        content: userText,
        timestamp: new Date()
      }

    ]);


    setLoading(true);


    try {

      // ===============================================
      // GREETINGS
      // ===============================================

      const lowerInput =
        userText
          .toLowerCase()
          .trim();


      if (
        lowerInput === 'hi' ||
        lowerInput === 'hello' ||
        lowerInput === 'hey' ||
        lowerInput === 'namaste'
      ) {

        setTimeout(() => {

          setMessages((prev) => [

            ...prev,

            {
              role: 'assistant',

              content:
                'Namaste! 👋 Aap apne academic notes se koi bhi question pooch sakte hain.',

              timestamp:
                new Date()
            }

          ]);


          setLoading(false);

        }, 500);


        return;
      }


      // ===============================================
      // FIND RELEVANT SUBJECT
      // ===============================================

      const relevantSubjects =
        findRelevantSubjects(
          userText
        );


      console.log(
        '🔎 QUESTION:',
        userText
      );


      console.log(
        '📚 RELEVANT SUBJECTS:',
        relevantSubjects
      );


      // ===============================================
      // SUBJECT NOT FOUND
      // ===============================================

      if (
        relevantSubjects.length === 0
      ) {

        setMessages((prev) => [

          ...prev,

          {
            role: 'assistant',

            content:
              `Mujhe samajh nahi aaya ki ye question kis subject se related hai. 😕\n\nPlease subject ka naam bhi likhein, jaise:\n\n• DBMS normalization\n• OS deadlock\n• DSA linked list\n• TOC DFA\n• CN TCP/IP\n• ML regression`,

            timestamp:
              new Date()
          }

        ]);


        setLoading(false);

        return;
      }


      // ===============================================
      // SEARCH PDFs
      // ===============================================

      let finalAnswer = '';

      let sourceSubjects = [];


      // Maximum 3 relevant subjects
      const subjectsToSearch =
        relevantSubjects.slice(0, 3);


      console.log(
        '📖 SEARCHING SUBJECTS:',
        subjectsToSearch
      );


      // ===============================================
      // LOOP THROUGH SUBJECTS
      // ===============================================

      for (
        const subject of subjectsToSearch
      ) {

        // =============================================
        // LOOP THROUGH PDF FILES
        // =============================================

        for (
          const file of subject.files
        ) {

          console.log(
            '📄 SEARCHING PDF:',
            file
          );


          const pdfText =
            await extractPDFText(
              file
            );


          console.log(
            '📝 EXTRACTED TEXT LENGTH:',
            pdfText.length
          );


          if (!pdfText) {

            continue;
          }


          const relevantText =
            findRelevantText(
              pdfText,
              userText
            );


          console.log(
            '🔍 RELEVANT TEXT FOUND:',
            relevantText
              ? 'YES'
              : 'NO'
          );


          if (
            relevantText
          ) {

            finalAnswer +=
              relevantText +
              '\n\n';


            const sourceName =
              `${subject.semester} → ${subject.subject}`;


            if (
              !sourceSubjects.includes(
                sourceName
              )
            ) {

              sourceSubjects.push(
                sourceName
              );
            }


            // Stop after enough information
            if (
              finalAnswer.length > 3500
            ) {

              break;
            }
          }
        }


        if (
          finalAnswer.length > 3500
        ) {

          break;
        }
      }


      // ===============================================
      // ANSWER FOUND
      // ===============================================

      if (
        finalAnswer.trim()
      ) {

        // Remove duplicate whitespace
        const cleanedAnswer =
          finalAnswer
            .replace(/\s+/g, ' ')
            .trim();


        const sourceText =
          sourceSubjects.length > 0
            ? sourceSubjects.join(', ')
            : 'Academic Notes';


        const answer =
          `📚 ${sourceText}\n\n${cleanedAnswer}`;


        setMessages((prev) => [

          ...prev,

          {
            role: 'assistant',
            content: answer,
            timestamp: new Date()
          }

        ]);

      }


      // ===============================================
      // NO ANSWER FOUND
      // ===============================================

      else {

        setMessages((prev) => [

          ...prev,

          {
            role: 'assistant',

            content:
              `Sorry 😕 Mujhe **${relevantSubjects[0].subject}** ke available notes mein is question ka relevant content nahi mila.\n\nAap question ko thoda different wording mein try kar sakte hain.\n\nExample:\n• What is normalization?\n• Explain normalization in DBMS\n• Define 1NF, 2NF and 3NF`,

            timestamp:
              new Date()
          }

        ]);

      }


    } catch (error) {

      console.error(
        '❌ CHATBOT ERROR:',
        error
      );


      setMessages((prev) => [

        ...prev,

        {
          role: 'assistant',

          content:
            'Sorry 😕 Notes read karte waqt problem aa gayi. Please dobara try karein.',

          timestamp:
            new Date()
        }

      ]);

    } finally {

      setLoading(false);

    }
  };


  // ===================================================
  // UI
  // ===================================================

  return (

    <div className="chatbot-container">

      <Navbar />


      <div className="chatbot-content">


        {/* =========================================
            HEADER
        ========================================= */}

        <div className="chatbot-header">

          <h1>
            💬 Eco Chat
          </h1>

          <p>
            Ask questions from your academic notes
          </p>

        </div>


        {/* =========================================
            MESSAGES
        ========================================= */}

        <div className="chat-messages">

          {messages.map(
            (msg, index) => (

              <div
                key={index}
                className={`message ${
                  msg.role === 'user'
                    ? 'user-message'
                    : 'bot-message'
                }`}
              >

                <div className="message-content">

                  <div className="message-text">
                    {msg.content}
                  </div>


                  <div className="message-time">

                    {msg.timestamp.toLocaleTimeString(
                      [],
                      {
                        hour: '2-digit',
                        minute: '2-digit'
                      }
                    )}

                  </div>

                </div>

              </div>

            )
          )}


          {/* =======================================
              LOADING
          ======================================= */}

          {loading && (

            <div className="typing-loader">

              📚 Notes check kar raha hoon...

            </div>

          )}


          <div
            ref={messagesEndRef}
          />

        </div>


        {/* =========================================
            INPUT
        ========================================= */}

        <form
          onSubmit={handleSend}
          className="chat-input-form"
        >

          <input
            type="text"
            value={inputMessage}
            onChange={(e) =>
              setInputMessage(
                e.target.value
              )
            }
            placeholder="Ask something from your notes..."
            className="chat-input"
          />


          <button
            type="submit"
            className="send-btn"
            disabled={loading}
          >

            {loading
              ? '...'
              : 'Send'}

          </button>

        </form>

      </div>

    </div>
  );
};


export default Chatbot;