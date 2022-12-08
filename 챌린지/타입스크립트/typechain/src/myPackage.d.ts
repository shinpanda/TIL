interface Config{
    url:string;
}
declare module "myPackage" {
    function init(config: Config): boolean;
    function exit(code:number): number;
}

// 타입스크립트에 타입을 설명하는 파일