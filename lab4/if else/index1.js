let so1 = 3
let so2 = 7
let so3 = 0
function amhayduong(x) {
    if(x<0) {
        return "là số âm"
    }
    else return "là số dương"
}

console.log(amhayduong(so1))
function chanhayle(x) {
    if(x%2==0) {
        return x,"là số chẵn"
    }
    else return x, "là số lẻ"
}
console.log(chanhayle(so2))
function solonnhat(so1,so2,so3) {
    let max = so1
    if(so2>max){
        max =so2
    }
    else if (so3>max) {
        max = so3
    }
    return max
}
console.log("số lớn nhất là",solonnhat(so1,so2,so3))
function namnhuan(x) {
    if (x%4==0 || x%400 ==0) {
        return  "là năm nhuận"
    }
    else {
        return "ko phải là năm nhuận"
    }
}
console.log(namnhuan(2022))
const na = ["a","e","u","i","o"]
const e = "u"
function nguyenam(x) {
    return na.includes(x.toLowerCase())
}
if (nguyenam(e)==true) {
    console.log(e, "là nguyên âm")
}
else console.log(e,"là phụ âm")

const a = 3
const b = 4
const c = 1
function ptbac2(a,b,c) {
    if (a == 0 && b ==0) {
        return "vô nghiệm"
    }
    if (a == 0 || (Math.pow(b,2)-4*a*c)<0)  {
        return "có 1 nghiệm"
    }
    else {

        return "có 2 nghiệm " + (-b-Math.sqrt((Math.pow(b,2)-4*a*c),2))/(2*a)  + " và " +(-b+Math.sqrt((Math.pow(b,2)-4*a*c),2))/(2*a)
    }

}
console.log(a+"x^2 + " +b+"x +" +c, ptbac2(a,b,c))
 