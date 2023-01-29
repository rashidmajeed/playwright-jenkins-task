// @ts-check
const { test, expect } = require('@playwright/test');
import { JobSearchPage } from '../Pages/jobsearch'


test('Text appear as Search & Filter Jobs on page ', async ({ page }) => {
    const JobSearch = new JobSearchPage(page)
    await JobSearch.NagivateToUrl()
    await JobSearch.isVisibleTitle()
  });
  
  
