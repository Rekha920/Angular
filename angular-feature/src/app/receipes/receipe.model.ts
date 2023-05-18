export class Recipe{
    public name:string | undefined;
    public description:string |undefined;
    public imageUrl:string | undefined;

    constructor(name:string,desc:string,image:string){
        this.name=name;
        this.description=desc;
        this.imageUrl=image;
    }
    
}