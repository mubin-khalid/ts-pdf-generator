import { Request, Response } from "express";
import pdfKit from "pdfkit";
import { v4 } from "uuid";
class PDFController {
  generate = async (req: Request, res: Response) => {
    const doc = new pdfKit();
    doc
      .fontSize(25)
      .text(
        "Test PDF generation using TS (viewable in browser directly)",
        100,
        100
      );
    doc.pipe(res);
    doc.end();
  };
  generateAndDownload = async (req: Request, res: Response) => {
    const fileName = v4();
    const doc = new pdfKit();
    doc
      .fontSize(25)
      .text("Test PDF generation using TS (direct download) ", 100, 100);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=${fileName}.pdf`);
    doc.pipe(res);
    doc.end();
  };
}

export default new PDFController();
