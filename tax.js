// Function to calculate net salary
function netSalary(basicSalary, benefits) {
    
    basicSalary = parseFloat(basicSalary);
    benefits = parseFloat(benefits);
  
    let grossSalary = basicSalary + benefits;
  
    
    let payee = 0;
    if (grossSalary <= 24000) {
      payee = grossSalary * 0.1; 
    } else if (grossSalary <= 32333) {
      payee = 24000 * 0.1 + (grossSalary - 24000) * 0.25; 
    } else if (grossSalary <= 500000) {
      payee = 24000 * 0.1 + 8333 * 0.25 + (grossSalary - 32333) * 0.3; // 32,334 - 500,000
    } else if (grossSalary <= 800000) {
      payee = 24000 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + (grossSalary - 500000) * 0.325; // 500,001 - 800,000
    } else {
      payee = 24000 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + 300000 * 0.325 + (grossSalary - 800000) * 0.35; // Above 800,000
    }
    payee = Math.floor(payee);
  
    // NHIF deductions
    let NHIFDeductions = Math.floor(basicSalary * 0.015);
  
    // NSSF deductions
    let NSSFDeductions = Math.floor(basicSalary * 0.06);
  
    // Cnet salary
    let netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;
  
    // the net salary
    console.log(`
    Your NHIF Deduction is ${NHIFDeductions}
      Your gross salary is ${grossSalary}
      
      Your NSSF Deduction is ${NSSFDeductions}
      Your net salary is: Ksh. ${netSalary}
      Your payee is ${payee}
    `);
  }
  
  netSalary(6005000, 0);