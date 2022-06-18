class Hex {
    encode(str: string): string {
        let hChar: string = "";
        let result: string = "";

        for (let i: number = 0; i < str.length; i++) {
            hChar = str.charCodeAt(i).toString(16);
            result += ("000" + hChar).slice(-4);
        }

        return result
    }

    decode(str: string): string {
        let hArr: string[] = str.match(/.{1,4}/g) || [];
        let result: string = "";

        for (let i: number = 0; i < hArr.length; i++) {
            result += String.fromCharCode(parseInt(hArr[i], 16));
        }

        return result;
    }
}

const hex: Hex = new Hex();

export { hex };
