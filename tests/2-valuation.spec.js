const {test, execPath, expect} = require('@playwright/test');
const { TestContext } = require('node:test');
test('open the app and go for the valuation screen', async({page}) =>{

   // Open the application by using browser
   await page.goto('https://goldloanwebapp-qa-windows.azurewebsites.net/login');
   await page.waitForTimeout(500);
  
 
   // Enter the valid username 
   await page.locator('//*[@formcontrolname="username"]').fill("KaireeAdmin");
   await page.waitForTimeout(500);
 
 
   // Enter the valid password
   await page.locator('//*[@id="mat-input-1"]').fill('Admin@123');
   await page.waitForTimeout(500);

    // Tap the login button
  await page.locator('//*[@id="app"]/app-login/mat-sidenav-container/mat-sidenav-content/div/form/div[4]/div/button').click(); 
  await page.waitForTimeout(500);
 
  // select the branch
  await page.locator('//*[@id="selectBranch"]/div').click();
  await page.waitForTimeout(500);

   // Drag and select the perticular branch (Panvel)
  await page.locator('//*[@id="mat-option-0"]').click();
  await page.waitForTimeout(500);

  // click and submit branch button
  await page.locator('//*[@id="branchSubmit"]').click();
  await page.waitForTimeout(500);

  await expect(page).toHaveTitle('Gold Loan - Dashboard');
  await page.waitForTimeout(500);


  // click loan disbursement drop-down button
  await page.locator('//*[@id="menu-item-20"]/span[2]/div/span/mat-icon').click();
  await page.waitForTimeout(500);

  //click and open the valuation screen
  await page.locator('//*[@id="menu-item-23"]').click();
  await page.waitForTimeout(500);


  //Identify the hearders
  await expect(page).toHaveTitle('Gold Loan - Valuation');
  await page.waitForTimeout(500);

  //refresh the page
  await page.locator('//*[@id="app"]/app-pages/mat-drawer-container/mat-drawer-content/div/app-goldvaluation/div/div/div[1]/div/div/button/span[3]').click();
  await page.waitForTimeout(500);

  //select particular customer
// // qhudo code 


  //select particular customer

  const selectRow = await page.$$('//*[@id="ValuationTable"]/tbody')
  await page.waitForTimeout(5000);

  for(let valuationList of selectRow){
    const customerName = await valuationList.textContent();

     const string ='EN-2425-PN-01726  avinash jiwadhan yadav  Retail  Pending for valuation  16-Oct-2024 | 10:27 AM remove_red_eye EN-2425-PN-01727  maharaja jeweller  Express  Pending for valuation  16-Oct-2024 | 10:28 AM remove_red_eye EN-2425-PN-01728  maharaja jeweller  Express  Pending for valuation  16-Oct-2024 | 10:28 AM remove_red_eye'

//  const arr['EN-2425-PN-01726 ', 'EN-2425-PN-01727', 'EN-2425-PN-01727']

    console.log("customerName => ", typeof customerName);
    if(customerName.toStringstring){
      await valuationList.click();
      

    }
    // await customerName.nth(1).click();

  //   const listItems = await page.$$('//*[@id="ValuationTable"]/tbody');

  //   // Iterate through each list item and click it
  // for (let i = 0; i < listItems.length; i++) {
  //   console.log(`Clicking on item ${i + 1}`);

  //   // Re-fetch the item in each iteration to handle any potential DOM changes
  //   const items = await page.$(`.list-item:nth-child(${i + 1})`);

  //   if (items) {
  //     await items.click();
  //     console.log(`Clicked on item ${i + 1}`);
  //   } else {
  //     console.warn(`Item ${i + 1} not found.`);
  //   }
  // }

   }
   const rowt = page.locator('#ValuationTable .mat-mdc-row')
   const rowCount = await rowt.count();
   console.log("rowCount => ", rowCount)

  // Locate the second row (index 1) of the table body
  const row = page.locator('#ValuationTable .mat-mdc-row').nth(rowCount - 1);

  // Within the second row, locate the "Position" cell (2nd column)
  const positionCell = row.locator('td').nth(5);

  // Click on the "Position" cell
  await positionCell.click();


  //click on the edit card 
  await page.locator('//*[@id="app"]/app-pages/mat-drawer-container/mat-drawer-content/div/app-goldvaluation/section/app-itemlistcomponent/div/div[3]/div[2]/div/div/div[1]/div[2]/button[2]').click();
  await page.waitForTimeout(500);

  //select purity from purity list
  await page.locator('//*[@formcontrolname="purityId"]').click();
  await page.waitForTimeout(500);

  const percent = await page.$$("//div[@role='listbox']//span")
  await page.waitForTimeout(500);


  for(let purityList of percent)
  {
    const PurityName = await purityList.textContent();
   
    if(PurityName.includes(' 90 - 90% '))
  {
    await purityList.click();
    await page.waitForTimeout(500);
  }
}
  
  // click and select Acid checkbox
  await page.locator('//*[@formcontrolname="kasoti"]').click();
  await page.waitForTimeout(500);

  //click on the update button
  await page.locator('//*[@id="app"]/app-pages/mat-drawer-container/mat-drawer-content/div/app-goldvaluation/section/app-itemlistcomponent/section/app-valuationdata/div/form/div[6]/button[2]').click();
  await page.waitForTimeout(500);

  //close alert box after add or update item

  await page.locator("//button[text()='OK']").click();
  await page.waitForTimeout(500);

  // page.on('dialog', async dialog => {
  //   expect(dialog.type()),toContain('ok').click();
  //   await page.waitForTimeout(5000);
  //   expect(dialog.message()).toContain('Item updated successfully.');
  //   await dialog.accept();
  //   await page.waitForTimeout(5000);
    
  // })

  //Click on Add button for more item adding
  await page.locator('//*[@id="app"]/app-pages/mat-drawer-container/mat-drawer-content/div/app-goldvaluation/section/app-itemlistcomponent/div/div[3]/div[1]/button').click();
  await page.waitForTimeout(500);

  //Selct item name from item list
  await page.locator('//*[@formcontrolname="itemId"]').click();
  await page.waitForTimeout(500);

  const item = await page.$$("//div[@role='listbox']//span")

  for(let ItemList of item){
    const ItemName = await ItemList.textContent();
    // console.log(ItemName);
    if(ItemName.includes(' BANGLE ')){
      await ItemList.click();
      await page.waitForTimeout(500);
    }
  }
  // Enter quantity in digit
  await page.locator('//*[@formcontrolname="itemQuantity"]').fill('2')
  await page.waitForTimeout(500);

  // Enter Gross wt.  in digit or decimal
  await page.locator('//*[@formcontrolname="grossWt"]').fill('45.70')
  await page.waitForTimeout(500);

  // Enter Net wt.  in digit or decimal
  await page.locator('//*[@formcontrolname="netWt"]').fill('40.70')
  await page.waitForTimeout(500);

   //select purity from purity list
   await page.locator('//*[@formcontrolname="purityId"]').click();
   await page.waitForTimeout(500);
 
 
   const percent1 = await page.$$("//div[@role='listbox']//span")
   await page.waitForTimeout(500);
 
 
   for(let purityList of percent1)
   {
     const PurityName = await purityList.textContent();
    
 
     if(PurityName.includes(' 90 - 90% '))
   {
     await purityList.click();
     await page.waitForTimeout(500);
   }
  }

    // click and select Acid checkbox
  await page.locator('//*[@formcontrolname="kasoti"]').click();
  await page.waitForTimeout(500);

  //click on the  button
  await page.locator('//*[@id="app"]/app-pages/mat-drawer-container/mat-drawer-content/div/app-goldvaluation/section/app-itemlistcomponent/section/app-valuationdata/div/form/div[6]/button[3]').click();
  await page.waitForTimeout(500);

   //close alert box after add or update item

   await page.locator("//button[text()='OK']").click();
   await page.waitForTimeout(500);

   //Click and open the browser and upload the jewellery images
   await page.locator("#fileUpload").setInputFiles("C:/Users/HP/Downloads/Sample images'/Jewellers imanges/bali.png")
   await page.waitForTimeout(2000);

   //scroll down the screen
   const addButton = page.locator('//*[@id="app"]/app-pages/mat-drawer-container/mat-drawer-content/div/app-goldvaluation/section/app-itemlistcomponent/div/div[3]/div[2]/div/div/div[1]/div[2]/button[2]');
   await addButton.scrollIntoViewIfNeeded();
   await page.waitForTimeout(500);

   //Save valuation
   await page.locator('//*[@id="cdk-accordion-child-2"]/div/div[5]/button[2]').click();
   await page.waitForTimeout(5000);

}
)