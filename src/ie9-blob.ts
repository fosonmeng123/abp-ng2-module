class iBlob {
  type?: string;
  _texts: string[];

  constructor(texts: string[], options?: { type: string }) {}
}

class iFileReader {
  onload: Function;

  readAsText(blob: Blob): void {
    if (typeof this.onload === 'function') {
      this.onload();
    }
  }
}

export const Blob: any = window['Blob'] || iBlob;
export const FileReader: any = window['FileReader'] || iFileReader;