function label_create(ele_name,attr_name_1,attr_value_2,content,ele_Class){
    var ele = document.createElement(ele_name);
    ele.setAttribute(attr_name_1,attr_value_2);
    if(ele_Class!==""){
    ele.className=ele_Class;
    }
    if(content!==""){
        ele.innerHTML = content;
    }
    if(ele_name=="select"){
        ele.required=true;
        ele.placeholder="select...";
    }
    return ele;
}
function div_create(ele_name,ele_Class){
    var div_ele=document.createElement(ele_name);
    div_ele.className=ele_Class;
    return div_ele;
}
function opt_create(ele_content){
var opt = document.createElement("option");
opt.innerHTML=ele_content;
opt.value=ele_content;

if(ele_content=="Choose..."){
    opt.disabled=true;
    opt.selected=true;
    opt.value="";
}
return opt;
}

function input_create(ele_name,attr_name_1,attr_value_1,id_val_1,in_class){
    var input = document.createElement(ele_name);
     input.setAttribute(attr_name_1,attr_value_1);
     input.className=in_class;
     input.id = id_val_1;
     input.required=true;
     input.placeholder=id_val_1;
     return input;
}
function radio_create(ele_name,attr_name_1,attr_value_1,attr_name_2,attr_value_2,attr_name_3,attr_value_3,id_val_1,rdo_class){
    var radio = document.createElement(ele_name);
    radio.setAttribute(attr_name_1,attr_value_1);
    radio.setAttribute(attr_name_2,attr_value_2);
    radio.setAttribute(attr_name_3,attr_value_3);
    radio.className=rdo_class;
    radio.id = id_val_1;
    return radio;
}
function btn_create(ele_name,attr_name_1,attr_value_1,attr_name_2,attr_value_2,id_val_1,content,btn_class){
    var btn = document.createElement(ele_name);
    btn.setAttribute(attr_name_1,attr_value_1);
    //btn.setAttribute(attr_name_2,attr_value_2);
    btn.className=btn_class;
    btn.innerHTML=content;
    btn.id = id_val_1;
     return btn;
}
function select_create(ele_name,attr_name_1,attr_value_1,attr_name_2,attr_value_2,id_val_1,sel_class){
    var sel = document.createElement(ele_name);
    sel.setAttribute(attr_name_1,attr_value_1);
    sel.setAttribute(attr_name_2,attr_value_2);
    sel.className=sel_class;
    sel.id = id_val_1;
     return sel;
}
function th_create(ele_name,attr_name_1,attr_value_1,content){
    var th = document.createElement(ele_name);
    th.setAttribute(attr_name_1,attr_value_1);
    th.innerHTML=content;
    return th;
}
//Create Outer Box
var div_par=div_create("div","box");
//Heading
var head1=document.createElement("h1");
head1.id="title";
head1.innerHTML="HTML FORM";
//Description
var descr = label_create("p","id","description","This HTML Form Created Using DOM...","text-center");
//Form Element
var form=document.createElement("form");
form.setAttribute("onsubmit","return Form_Submit(event)")
form.id="form";
//First Row
var div_r1=div_create("div","form-row");
var div_r1_c1=div_create("div","form-group col-md-6");
var labelfname = label_create("label","for","first-name","First Name","");
var inputfname = input_create("input","type","text","first-name","form-control");
var div_r1_c2=div_create("div","form-group col-md-6");
var labellname = label_create("label","for","last-name","Last Name","");
var inputlname = input_create("input","type","text","last-name","form-control");
//Second Row
var div_r2=div_create("div","form-group");
var labeladdr = label_create("label","for","address","Address","");
var inputaddr = input_create("textarea","type","text","address","form-control");
//Third Row
var div_r3=div_create("div","form-row");
var div_r3_c1=div_create("div","form-group col-md-2");
var labelpincode = label_create("label","for","pincode","Pin Code","");
var inputpincode = input_create("input","type","text","pincode","form-control");
var div_r3_c2=div_create("div","form-group col-md-4 main2");
var labelgender = document.createElement("h6");
labelgender.innerHTML="Gender";
var div_r3_c2_cl1=div_create("div","form-group form-check");
var radiogenmale = radio_create("input","type","radio","name","gender","value","Male","genmale","form-check-input radio");
var labelgenmale = label_create("label","for","genmale","Male","form-check-label main1");
//div_r3_c2_cl1.append(radiogenmale,labelgenmale);
var radiogenfemale = radio_create("input","type","radio","name","gender","value","Female","genfemale","form-check-input radio");
var labelgenfemale = label_create("label","for","genfemale","Female","form-check-label main1");
var radiogenothers = radio_create("input","type","radio","name","gender","value","Others","genothers","form-check-input radio");
var labelgenothers = label_create("label","for","genothers","Others","form-check-label");
div_r3_c2_cl1.append(radiogenmale,labelgenmale,radiogenfemale,labelgenfemale,radiogenothers,labelgenothers);
/*var selgender = label_create("select","id","inpgender","","form-control");
var genderopt1=opt_create("Choose...");
var genderopt2=opt_create("Female");
var genderopt3=opt_create("Male");
var genderopt4=opt_create("Other");
selgender.append(genderopt1,genderopt2,genderopt3,genderopt4);*/
var div_r3_c3=div_create("div","form-group col-md-6");
var labelfood = label_create("label","for","inpfood","Choice of Food","");
var selfood = select_create("select","name","food[]","multiple","multiple","inpfood","form-control js-example-basic-multiple");
var foodopt1=opt_create("Briyani");
var foodopt2=opt_create("Meals");
var foodopt3=opt_create("Chapathi");
var foodopt4=opt_create("Parotta");
var foodopt5=opt_create("Dosa");
selfood.append(foodopt1,foodopt2,foodopt3,foodopt4,foodopt5);
var div_r4=div_create("div","form-row");
var div_r4_c1=div_create("div","form-group col-md-6");
var labelstate = label_create("label","for","state","State","");
var inputstate = input_create("input","type","text","state","form-control");
var div_r4_c2=div_create("div","form-group col-md-6");
var labelcountry = label_create("label","for","country","Country","");
var inputcountry = input_create("input","type","text","country","form-control");
//var btnsubmit = btn_create("button","type","submit","onclick","Form_Submit(event)","btnSubmit","Submit","btn btn-primary");
var btnsubmit = btn_create("button","type","submit","","","submit","Submit","btn btn-primary");

var table1=document.createElement("table");
table1.className="table table-striped";
var thead1=document.createElement("thead");
var tbody1=document.createElement("tbody");
var tr1=document.createElement("tr");
var th1=th_create("th","scope","col","#")
var th2=th_create("th","scope","col","First Name")
var th3=th_create("th","scope","col","Last Name")
var th4=th_create("th","scope","col","Address")
var th5=th_create("th","scope","col","PinCode")
var th6=th_create("th","scope","col","Gender")
var th7=th_create("th","scope","col","Food")
var th8=th_create("th","scope","col","State")
var th9=th_create("th","scope","col","Country")
tr1.append(th1,th2,th3,th4,th5,th6,th7,th8,th9);
thead1.append(tr1);
table1.append(thead1,tbody1);

div_r1_c1.append(labelfname,inputfname);
div_r1_c2.append(labellname,inputlname);
div_r1.append(div_r1_c1,div_r1_c2);
div_r2.append(labeladdr,inputaddr);
div_r3_c1.append(labelpincode,inputpincode);
div_r3_c2.append(labelgender,div_r3_c2_cl1);
div_r3_c3.append(labelfood,selfood);
div_r3.append(div_r3_c1,div_r3_c2,div_r3_c3);
div_r4_c1.append(labelstate,inputstate);
div_r4_c2.append(labelcountry,inputcountry);
div_r4.append(div_r4_c1,div_r4_c2);
form.append(div_r1,div_r2,div_r3,div_r4,btnsubmit);
div_par.append(descr,form,table1);
document.body.append(head1,div_par);


function Form_Submit(event){
    event.preventDefault();
    var selectedvalues=$("#inpfood").val();
    if (selectedvalues && selectedvalues.length >= 2) {
    var tbl=document.querySelector("table");
    var newrow=tbl.insertRow(tbl.rows.length);
var td1=newrow.insertCell(0);
td1.innerHTML=(tbl.rows.length)-1;
var td2=newrow.insertCell(1);
td2.innerHTML=document.getElementById("first-name").value;
var td3=newrow.insertCell(2);
td3.innerHTML=document.getElementById("last-name").value;
var td4=newrow.insertCell(3);
td4.innerHTML=document.getElementById("address").value;
var td5=newrow.insertCell(4);
td5.innerHTML=document.getElementById("pincode").value;
var td6=newrow.insertCell(5);
td6.innerHTML=document.getElementById("inpgender").value;
var td7=newrow.insertCell(6);
td7.innerHTML=selectedvalues.join(", ");
var td8=newrow.insertCell(7);
td8.innerHTML=document.getElementById("inpstate").value;
var td9=newrow.insertCell(8);
td9.innerHTML=document.getElementById("inpcountry").value;

   //var arr= [...document.querySelectorAll("input")];
   var arr= [...document.getElementsByTagName("input")];
   arr.map((ele)=>ele.value="");
   document.getElementById("inpgender").selectedIndex=0;
   $('#inpfood').val(null).trigger('change');
   return true;
    }
     else {
     alert("Select at least two food...");
     return false;
    }
}
/*var break_2 = break_create();
var labelmname = label_create("label","for","middlename","Middle Name");
var break_3 = break_create();
var inputmname = input_create("input","type","text","middlename");
var break_4 = break_create();
var labellname = label_create("label","for","lastname","Last Name");
var break_5 = break_create();
var inputlname = input_create("input","type","text","lastname");
var break_6 = break_create();
var labelemail = label_create("label","for","email","Email");
var break_7 = break_create();
var inputemail = input_create("input","type","email","email");
var break_8 = break_create();
var labelpwd = label_create("label","for","password","Password");
var break_9 = break_create();
var inputpwd = input_create("input","type","password","password");
var break_10 = break_create();
var labelphno = label_create("label","for","phonenumber","Phone Number");
var break_11 = break_create();
var inputphno = input_create("input","type","number","phonenumber");
var break_12 = break_create();
document.body.append(labelfname,break_1,inputfname,break_2,labelmname,break_3,inputmname,break_4,labellname,break_5,inputlname,break_6,labelemail,break_7,inputemail,break_8,
    labelpwd,break_9,inputpwd,break_10,labelphno,break_11,inputphno,break_12);*/

    $(document).ready(function() {
        $('.js-example-basic-multiple').select2({
            placeholder: 'select atleast two food',
            width: '100%',  // Set the width of the dropdown
            // Add more options as needed
         });
    });
