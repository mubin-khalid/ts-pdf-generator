import express, { Request, Response } from 'express';
import PDFController from "../app/controllers/pdf.controller"
import app from './server';

app.get('/', (_: Request, res: Response) => {
  res.send(`Please use
  <ul>
    <li><b>/pdf</b> endpoint to generate and view the PDF in browser</li>
    <li><b>/download-pdf</b> to just download the PDF</li>
  </ul>
  
  `);
});

app.get("/pdf", PDFController.generate);
app.get("/download-pdf", PDFController.generateAndDownload);
