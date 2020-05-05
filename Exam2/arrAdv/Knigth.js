function solve(array=[]) {
let copy=array.slice(0);
let equipment=copy.shift();
let equipArr=equipment.split(' ');


function buy(pro) {
    if(!equipArr.includes(pro)){
        equipArr.push(pro)
    }
    return equipArr;
}
function trash(pro) {
    if(equipArr.includes(pro)){
        equipArr.splice(equipArr.indexOf(pro),1)
    }
    return equipArr;
}
function repair(pro) {
    if(equipArr.includes(pro)){
       let repElem = equipArr.splice(equipArr.indexOf(pro),1);
       equipArr.push(repElem);
    }
    return equipArr;
}
function upgrade(pro) {
    let parts=pro.split('-');
    let upgradePro=parts[0];
    let upgrade=parts[1];

    let concat=`${upgradePro}:${upgrade}`;

    if(equipArr.includes(upgradePro)){
        let repElem = equipArr.splice(equipArr.indexOf(pro)-1,0,concat);
        equipArr.push(repElem);
     }
     return equipArr;
}

for (let i = 0; i = copy.length; i++) {
    
    let parts=copy.shift();
    let elem=parts.split(' ');
    let command=elem[0];
    let product=elem[1];

   switch (command) {
        case 'Buy':
           array= buy(product);
            break;
            case 'Trash':
            trash(product);
                break;
                case 'Repair':
                 repair(product)
                    break;
                    case 'Upgrade':
                      upgrade(product);
                        break;
    
        default:
            break;
    }
}
   console.log(equipArr.join(' '));
}

solve(['SWORD Shield Spear','Buy Bag','Trash Shield','Repair Spear','Upgrade SWORD-Steel'])