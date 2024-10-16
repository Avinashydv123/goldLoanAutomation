const {test, execPath, expect} = require('@playwright/test');

test('login the application and open the enquiry form', async({page}) =>{

      // Open the application by using browser
   await page.goto('https://goldloanwebapp-qa-windows.azurewebsites.net/login');
   await page.waitForTimeout(1000);
  
 
   // Enter the valid username 
   await page.locator('//*[@formcontrolname="username"]').fill("KaireeAdmin");
   await page.waitForTimeout(1000);
 
 
   // Enter the valid password
   await page.locator('//*[@id="mat-input-1"]').fill('Admin@123');
   await page.waitForTimeout(1000);

    // Tap the login button
  await page.locator('//*[@id="app"]/app-login/mat-sidenav-container/mat-sidenav-content/div/form/div[4]/div/button').click(); 
  await page.waitForTimeout(1000);
 
  // select the branch
  await page.locator('//*[@id="selectBranch"]/div').click();
  await page.waitForTimeout(1000);

   // Drag and select the perticular branch (Panvel)
  await page.locator('//*[@id="mat-option-0"]').click();
  await page.waitForTimeout(1000);

  // click and submit branch button
  await page.locator('//*[@id="branchSubmit"]').click();
  await page.waitForTimeout(1000);

  await expect(page).toHaveTitle('Gold Loan - Dashboard');
  console.log('Gold Loan - Dashboard');
  await page.waitForTimeout(2000);

   //click and open loan disbursement drop-down button
   await page.locator('//*[@id="menu-item-20"]/span[2]/div/span/mat-icon').click();
   await page.waitForTimeout(2000);


  //click and open the Enquiry screen
   await page.locator('//*[@id="menu-item-21"]').click();
   await page.waitForTimeout(2000);

  //Identify the hearders
  await expect(page).toHaveTitle('Gold Loan - Enquiry Master');
  console.log('Gold Loan - Enquiry Master');
  await page.waitForTimeout(1000);

  // Search exisitng customer 
  await page.click("[id='search']");
  await page.waitForTimeout(2000);
  await page.keyboard.type('Avinash jiwadhan yadav');
  await page.waitForTimeout(2000);
  await page.click('//*[@id="mat-autocomplete-0"]');
  await page.waitForTimeout(2000);
  // await page.locator("[id='search']").fill("Avinash jiwadhan yadav");

  // select ornament 
  const list = await page.$$("//div[@role='listbox']//span")
  await page.waitForTimeout(500);
  for(let lists of list)
  {
    const ItemList = await lists.textContent();
    // console.log(ItemList);
    if(ItemList.includes(' BANGLE '))
    {
      await lists.click();
      await page.waitForTimeout(500);
      break;
    }
  }; 
//Enter quantity
await page.locator('//*[@formcontrolname="quantity"]').fill('2','2');
await page.waitForTimeout(500);

//Enter Gross weight
await page.locator('//*[@formcontrolname="grossWeight"]').fill('55','20');
await page.waitForTimeout(500);

//Enter Net weight
await page.locator('//*[@formcontrolname="netWeight"]').fill('50','20');
await page.waitForTimeout(500);

//click the add button
await page.locator('//*[@id="enquiryForm"]/div[2]/div[4]/app-editabletable/div/div/form/div/button[1]').click();
await page.waitForTimeout(500);


//scroll the screen
const addButton = page.locator('//*[@id="enquiryForm"]/div[2]/div[4]/app-editabletable/div/div/form/div/button[1]');
await addButton.scrollIntoViewIfNeeded();
await page.waitForTimeout(500);

//Select referred by
await page.locator('//*[@formcontrolname="referBy"]').click();
await page.waitForTimeout(500);

const refer = await page.$$("//div[@role='listbox']//span") 

for(let refers of refer)
{
  const referedBy = await refers.textContent();
  // console.log(referedBy);
  if(referedBy.includes('Walk In'))
  {
    await refers.click();
    await page.waitForTimeout(500);

  }
}
//Refer name 
await page.locator('//*[@formcontrolname="referName"]').fill('Avinash yadav');
await page.waitForTimeout(500);

//refer contanct
await page.locator('//*[@formcontrolname="referContact"]').fill('7517396525');
await page.waitForTimeout(500);

//Enter the remark
await page.locator('//*[@formcontrolname="remark"]').fill('I am Avinash yadav');
await page.waitForTimeout(500);

// save the enquiry from by click  on save and forward button
await page.locator('//*[@id="enquiryForm"]/div[2]/div[5]/div[2]/div[2]/button').click();
await page.waitForTimeout(3000);
  
});