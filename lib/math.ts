export const topics=['有理数加减','有理数乘除','乘方与混合运算','简便计算','整式化简求值','一元一次方程'];
export const tips=['先把减法转成加法，再判断符号。','先确定正负，再算数值；除法转乘倒数。','先乘方，再乘除，最后加减。','观察能否凑整，或使用分配律。','先去括号、合并同类项，再代入。','等式两边做相同运算；最后代回检验。'];
export type Q={id:string;topic:number;text:string;answer:number;steps:string[]};
export function makeQ(topic:number,level=1):Q{const r=(max:number)=>Math.floor(Math.random()*max)+1;const a=r(level===1?9:18),b=r(8),c=r(6);let text='',answer=0,steps:string[]=[];
if(topic===0){text=`−${a} − (−${b}) + (−${c})`;answer=-a+b-c;steps=[`减去负数等于加上正数：−${a} + ${b} − ${c}`,`先算 −${a} + ${b} = ${-a+b}`,`再减 ${c}，结果为 ${answer}`];}
if(topic===1){const sign=Math.random()<.5?-1:1;const k=r(5);text=`(−${a}/${b}) ÷ (${c}/${b}) × (${sign*k})`;answer=-a*sign*k/c;steps=[`除以 ${c}/${b}，转成乘 ${b}/${c}`,`约分后得到 (−${a}/${c}) × (${sign*k})`,`结果为 ${-a*sign*k}/${c}，可约分或填写小数`];}
if(topic===2){text=`−${a}² + (−${b})² − ${c} × (−2)`;answer=-a*a+b*b+2*c;steps=[`−${a}² = −${a*a}；(−${b})² = ${b*b}`,`${c} × (−2) = −${2*c}`,`−${a*a} + ${b*b} + ${2*c} = ${answer}`];}
if(topic===3){text=`${a} × ${100-b} + ${a} × ${b}`;answer=a*100;steps=[`提取共同因数 ${a}`,`${a} × (${100-b} + ${b}) = ${a} × 100`,`结果为 ${answer}`];}
if(topic===4){text=`当 x = −${c} 时，求 ${a}x − ${b}(x − 2) + ${c} 的值`;answer=(a-b)*-c+2*b+c;steps=[`去括号：${a}x − ${b}x + ${2*b} + ${c}`,`合并同类项：(${a-b})x + ${2*b+c}`,`代入 x = −${c}，结果为 ${answer}`];}
if(topic===5){answer=c;text=level===1?`${a}(x − ${b}) = ${a*(c-b)}`:`(x − ${b})/2 − (x + ${a})/3 = ${(c-3*b-2*a)}/6`;steps=level===1?[`两边除以 ${a}：x − ${b} = ${c-b}`,`两边加 ${b}：x = ${c}`,`代回左边为 ${a*(c-b)}，与右边相等`]:[`两边乘 6：3(x − ${b}) − 2(x + ${a}) = ${c-3*b-2*a}`,`去括号合并：x − ${3*b+2*a} = ${c-3*b-2*a}`,`移项：x = ${c}`];}
return{id:crypto.randomUUID(),topic,text,answer,steps};}
export function parseAnswer(input:string):number|null{const t=input.trim().replace(/[−–]/g,'-').replace(/＝/g,'=').replace(/^x\s*=\s*/i,'').replace(/\s/g,'');if(/^[-+]?\d+(\.\d+)?$/.test(t))return Number(t);if(/^[-+]?\d+(\.\d+)?\/[-+]?\d+(\.\d+)?$/.test(t)){const [a,b]=t.split('/').map(Number);return b!==0?a/b:null;}return null;}
