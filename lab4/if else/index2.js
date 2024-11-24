let luong = 20
function thue(x) {
    let thunhap = 0
    if (x>20) {
        thunhap = (20/100)* x
        return thunhap
    }
    if (15<x<=20) {
        thunhap = (15/100) *x
        return thunhap
    }
    if (9<x<=15) {
        thunhap = (10/100) *x
        return thunhap
    }
    else {
        return thunhap
    }
}
console.log("thuế thu nhập là", thue(luong),"triệu")