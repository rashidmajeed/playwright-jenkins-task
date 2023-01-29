const { expect } = require('@playwright/test');

exports.JobSearchPage = class JobSearchPage {

    constructor(page) {
      this.page = page;
      this.SearchAndFilterJobs
     
 }

 async NagivateToUrl(){
  await this.page.goto('https://www.lanefinder.com/jobs/');
 }

 async isVisibleTitle() {
  await expect(this.page.getByText("Search & Filter Jobs")).toBeVisible();
 }


}

  
