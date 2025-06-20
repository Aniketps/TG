let emailExistance = (str)=>{
    let xhtml = new XMLHttpRequest();
    xhtml.open("get", "/searchEmail?e="+str, true);
    xhtml.onreadystatechange = function(){
        if(this.readyState == 4 && this.status){
            let isExists = this.responseText == "false"? false : true;
            let emailStatus = document.getElementById("emailStatus");
            if(isExists){
                emailStatus.innerHTML = "Email already exists...";
                emailStatus.style.color = 'red';
            }else{
                emailStatus.innerHTML = "";
            }
        }
    };
    xhtml.send();
};

let searchEmployees = ()=>{
    let name = document.getElementById("searchEmployee").value;

    let xhtml = new XMLHttpRequest();
    xhtml.open("GET", "/searchEmployee?n="+name, true);
    xhtml.onreadystatechange = function(){
        if(xhtml.readyState == 4 && xhtml.status == 200){
            let table = document.getElementById("table");
            table.innerHTML = "";
            let result = JSON.parse(this.responseText);
            console.log(result);
            if(result.length != 0){
                result.forEach((row, index)=>{
                    let str = `
                    <tr>
                        <td>${index+1}</td>
                        <td>${row.firstName}</td>
                        <td>${row.lastName}</td>
                        <td>${row.email}</td>
                        <td>${row.phone}</td>
                        <td><a href="/deleteuser?id="${row.id}">Delete</a></td>
                        <td><a href="/userProfile?id="${row.id}">View</a></td>
                    </tr>
                    `;
                    table.innerHTML += str;
                });
            }else{
                let str = `<tr style="height:40px;"><h2 style="padding:20px">NO DATA</h2></tr>`;
                table.innerHTML += str;
            }
        }
    };
    xhtml.send();
};