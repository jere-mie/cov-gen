function generate(){
    // getting localStorage
    let myName = localStorage.getItem("myName");
    let myEmail = localStorage.getItem("myEmail");
    let myAddress = localStorage.getItem("myAddress");
    let myPhone = localStorage.getItem("myPhone");
    let myGitHub = localStorage.getItem("myGitHub");
    let cltext = localStorage.getItem("cltext");

    // putting together email, phone, github into one line
    let myInfo = myEmail + " • " + myPhone;
    if(myGitHub!=null){
        myInfo += " • " + myGitHub;
    }
    // setting header information
    document.querySelector("#myName").innerText = myName.toUpperCase();
    document.querySelector("#myAddress").innerText = myAddress;
    document.querySelector("#myInfo").innerText = myInfo;
    document.querySelector("#myName2").innerText = myName;

    // input fields
    let company = document.querySelector("#company");
    let job = document.querySelector("#job");
    let name = document.querySelector("#name");
    
    // fields that need to be filled in
    let content_date = document.querySelector("#content-date");
    let content_name = document.querySelector("#content-name");
    let content_company = document.querySelector("#content-company");
    let content_job = document.querySelector("#content-job");
    let salutation = document.querySelector("#salutation");

    // let bold_job = document.querySelector("#bold-job");
    // let company_name = document.querySelector("#company-name");

    let d = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    content_date.innerText = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

    if(!name.value){
        salutation.innerText = "To whom it may concern,";
    }else{
        salutation.innerText = "Dear "+name.value+",";
        content_name.innerText = name.value;
    }
    content_job.innerText = "Re: "+job.value;
    content_company.innerText = company.value;

    let content = document.querySelector("#cltext");
    content.innerHTML = "";
    cltext = cltext.replace(`{{job}}`, job.value);
    cltext = cltext.replace(`{{company}}`, company.value);
    let paragraphs = cltext.split('\n');
    for(let i=0; i<paragraphs.length; i++){
        if (paragraphs[i] == "")
            continue;
        let p = document.createElement('p');
        let br = document.createElement('br');
        p.innerText = paragraphs[i];
        content.appendChild(p);
        content.appendChild(br);
        
    }    
    // bold_job.innerText = job.value;
    // company_name.innerText = company.value;

    document.title = "Cover Letter "+company.value+" "+job.value;
    print();
}