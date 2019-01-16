export class SlideInfo {
    public static createInstance({
        slideNum, isFirstSlide, isLastSlide, imagePath, audioPath, text }): SlideInfo {
        return new SlideInfo(slideNum, isFirstSlide, isLastSlide, imagePath, audioPath, text);
    }

    constructor(public slideNum: string, public isFirstSlide: boolean, public isLastSlide: boolean, public imagePath: string,
        public audioPath: string, public text: string) { }
}