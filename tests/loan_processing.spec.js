const {test, execPath, expect} = require('@playwright/test');
test('Go to the OE dashboard and open the loan processing form', async({page}) =>{

    // Open the application by using browser
    await page.goto('https://goldloanwebapp-qa-windows.azurewebsites.net/login');
    await page.waitForTimeout(2000);
    
  
    // Enter the valid username 
    await page.locator('//*[@formcontrolname="username"]').fill("avi");
    await page.waitForTimeout(500);
  
  
    // Enter the valid password
    await page.locator('//*[@id="mat-input-1"]').fill('Avinash!124421');
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
   await page.waitForTimeout(2000);
 
   //click on the loan processing form menu and open the OE-dashboard
   await page.locator('//*[@id="menu-item-27"]').click();
   await page.waitForTimeout(500) 
 
 
   //Identify the hearders
   await expect(page).toHaveTitle('Gold Loan - Operational Executive');
   
   await page.waitForTimeout(500);
 
   // select the particular customer
   await page.locator("//td[normalize-space()='avi Js ydv' ]").click();
   await page.waitForTimeout(4000);
   //click on the proceed button (eye_icon )
   await page.locator('//*[@id="app"]/app-pages/mat-drawer-container/mat-drawer-content/div/app-operational-executive/div/div[2]/table/tbody/tr[4]/td[12]/button/mat-icon').click();
   await page.waitForTimeout(5000);
 
   // //scroll down page by using mouse
   // await page.mouse.down(1000, 100);
   // await page.waitForTimeout(500);
 
 
   // //click on submit button with empty detail
   // await page.locator('//*[@id="app"]/app-pages/mat-drawer-container/mat-drawer-content/div/app-operational-executive/div/div/app-loanprocessingform/as-split/as-split-area[1]/as-split/as-split-area/div[2]/div/div[7]/div[3]/button').click();
   // await page.waitForTimeout(500);
 
   //create a new customer clicking on the add new cusotmer button and open the customer form
   
   await page.locator('//*[@id="app"]/app-pages/mat-drawer-container/mat-drawer-content/div/app-operational-executive/div/div/app-loanprocessingform/as-split/as-split-area[2]/as-split/app-customer-loan-side-pannel/div/div/div/div[1]/button').click();
   await page.waitForTimeout(5000);
 
   //fill the valid inforamtion
   //Anivarsary date
   await page.locator('//*[@formcontrolname="anniversaryDate"]').fill("01-01-2021");
   await page.waitForTimeout(500);
 
   //Date of birth
   await page.locator('//*[@formcontrolname="birthDate"]').fill("01-01-2000");
   await page.waitForTimeout(500);
 
   await page.locator('//*[@formcontrolname="birthDate"]').click();
   await page.waitForTimeout(500);
 
 
   // //Enter the Age 
   // await page.locator('//*[@formcontrolname="age"]').fill("25");
   // await page.waitForTimeout(500);
 
   //Select the gender
 
   await page.locator('//*[@formcontrolname="gender"]').click();
   await page.waitForTimeout(2000);
 
 
   const gender2 = await page.$$("//div[@role='listbox']//span")
 
   for(let genders of gender2)
   {
     const genderList = await genders.textContent();
     console.log(genderList);
 
     if(genderList.includes('Male'))
     {
       await genders.click();
       await page.waitForTimeout(2000);
 
     }
   }
  // Enter the alternative mob.no.
  await page.locator('//*[@formcontrolname="alternateMobileNo"]').fill("9637743940");
  await page.waitForTimeout(500);
  
  //Enter tele-phone number
  await page.locator('//*[@formcontrolname="phoneNo"]').fill("9637743941");
  await page.waitForTimeout(500);
 
  //click and open the camera 
  await page.locator("(//button[@type='button'])[5]").click();
  await page.waitForTimeout(5000);
 
  //capture the pic by snapshot
  await page.locator("(//button[@id='snap'])[1]").click();
  await page.waitForTimeout(5000);
 
 //save the image by clicking on the save button
 await page.locator("(//button[@id='send'])[1]").click();
 await page.waitForTimeout(3000);
 
 //clicking on the check-box
 await page.locator('//*[@formcontrolname="doNotDisturb"]').click();
 await page.waitForTimeout(500);
 
 //select or create customer bank
 await page.locator('//*[@formcontrolname="bankId"]').click();
 await page.waitForTimeout(2000);
 
 
 const bank = await page.$$("//div[@role='listbox']//span")
 
 for(let CustomerBank of bank)
 {
   const BankList = await CustomerBank.textContent();
   // console.log(BankList);
 
   if(BankList.includes(' ALLAHABAD BANK '))
   {
     await CustomerBank.click();
     await page.waitForTimeout(2000);
 
   }
 }
 
 // Select create and bank branch
 await page.locator('//*[@formcontrolname="bankBranchId"]').click();
 await page.waitForTimeout(2000);
 
 
 const branch = await page.$$("//div[@role='listbox']//span")
 
 for(let BankBranch of branch)
 {
   const BranchList = await BankBranch.textContent();
   console.log(BranchList);
 
   if(BranchList.includes(' panvel '))
   {
     await BankBranch.click();
     await page.waitForTimeout(2000);
 
   }
 }
 
 //scroll the screen
 const addButton = page.locator('//*[@id="enquiryForm"]/div[2]/div[4]/app-editabletable/div/div/form/div/button[1]');
 await addButton.scrollIntoViewIfNeeded();
 await page.waitForTimeout(500);
 
 // // Enter the IFSC code
 // await page.locator('//*[@formcontrolname="ifscCode"]').fill("SBIN000415");
 // await page.waitForTimeout(500);
 // await page.locator('//*[@formcontrolname="ifscCode"]').click();
 // await page.waitForTimeout(500);
 
 //Enter the Account number
 await page.locator('//*[@formcontrolname="accountNo"]').fill("3757001234");
 await page.waitForTimeout(500);
 
 // Select accountType 
 await page.locator('//*[@formcontrolname="accountType"]').click();
 await page.waitForTimeout(2000);
 
 
 const Type = await page.$$("//div[@role='listbox']//span")
 
 for(let Types of Type)
 {
   const AccountType = await Types.textContent();
   console.log(AccountType);
 
   if(AccountType.includes(' Savings '))
   {
     await Types.click();
     await page.waitForTimeout(2000);
 
   }
 }
 
 // Click upload documnet icon button and upload attached bank passbook or bank detail document
 await page.locator('//*[@id="app"]/app-pages/mat-drawer-container/mat-drawer-content/div/app-operational-executive/div/div/app-loanprocessingform/div/app-add-customer/div/div[1]/form/div[2]/div/app-bank-reusable/div/div/form/div[3]/div/button/mat-icon').click();
 await page.waitForTimeout(2000);
 
 });