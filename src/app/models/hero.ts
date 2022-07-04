
export interface hero {
  id: string;
  name:string;
  description?: string;
  thumbnail: {
    path: string;
    extension:string;
  };
  comics?: {
    available: number;
    items:[{
      name:string | undefined
    }?]
  };
  series?: {
    available: number;
    items:[{
      name:string
    }?]
  };
  stories?: {
    available: number;
    items:[{
      name:string
    }?]
  }
}

