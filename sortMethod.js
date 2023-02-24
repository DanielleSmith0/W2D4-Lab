//This is for fun

let arr = ["Amanda", "Shirley", "Jennifer", "Roxanne"];

arr.sort((a, b) => {
    if (a[0] === "J") {
        return -1
    }else if (b[0] === "J") {
        return 1
    }else if (b[0] === "A") {
        return -1
    }else if (a[0] === "A") {
        return 1
    }else{
        return 0
    }
})

console.log(arr)