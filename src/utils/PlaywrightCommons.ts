import { Page } from 'playwright';

export class PlaywrightCommons {
    private readonly mainURL: string = "https://www.ploom.co.uk/en";
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async openMainPage(): Promise<void> {
        await this.page.goto(this.mainURL);
    }

}
