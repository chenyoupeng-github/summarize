// 验证手机号是否正确
const phone = (rule, value, cb) => {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
    if (rule.required) {
        if (!value) {
            cb(new Error('请输入手机号码'))
        } else if (!reg.test(value)) {
            cb(new Error('请输入正确手机号码'))
        } else {
            cb()
        }
    } else if (value && !reg.test(value)) {
        cb(new Error('请输入正确手机号码'))
    } else {
        cb()
    }
}

// 验证邮箱是否正常
const email = (rule, value, cb) => {
    const reg = new RegExp('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$')
    if (rule.required) {
        if (!value) {
            cb(new Error('请输入邮箱'))
        } else if (!reg.test(value)) {
            cb(new Error('请输入正确邮箱账号'))
        } else {
            cb()
        }
    } else if (value && !reg.test(value)) {
        cb(new Error('请输入正确邮箱账号'))
    } else {
        cb()
    }
}

// 客户编码 只能是前两位英文后四位数字
const companyCode = (rule, value, cb) => {
    const reg = new RegExp('^[a-zA-Z]{2}[0-9]{3}$')
    if (rule.required) {
        if (!value) {
            cb(new Error('请输入客户编码'))
        } else if (!reg.test(value)) {
            cb(new Error('客户编码前两位字母后三位数字'))
        } else {
            cb()
        }
    } else if (value && !reg.test(value)) {
        cb(new Error('客户编码前两位字母后三位数字'))
    } else {
        cb()
    }
}

// 只能是英文和数字
const englishAndNum = (rule, value, cb) => {
    const reg = new RegExp('^[a-zA-Z0-9]+$')
    if (rule.required) {
        if (!value) {
            cb(new Error('请输入信息'))
        } else if (!reg.test(value)) {
            cb(new Error('只能输入英文和数字'))
        } else {
            cb()
        }
    } else if (value && !reg.test(value)) {
        cb(new Error('只能输入英文和数字'))
    } else {
        cb()
    }
}

//  只能是数字正整数
const positiveInteger = (rule, value, cb) => {
    const reg = new RegExp('^[0-9]*$')
    if (rule.required) {
        if (!value) {
            cb(new Error('请输入信息'))
        } else if (!reg.test(value)) {
            cb(new Error('只能输入正整数'))
        } else {
            cb()
        }
    } else if (value && !reg.test(value)) {
        cb(new Error('只能输入正整数'))
    } else {
        cb()
    }
}
// 数字 可以带小数
const number = (rule, value, cb) => {
    const reg = new RegExp('^[+]?[0-9]*\\.?[0-9]+$')
    if (rule.required) {
        if (!value && Number(value) !== 0) {
            cb(new Error('请输入信息'))
        } else if (!reg.test(value)) {
            cb(new Error('只能输入正数字'))
        } else {
            cb()
        }
    } else if (value && !reg.test(value)) {
        cb(new Error('只能输入正数字'))
    } else {
        cb()
    }
}
// money 金额
const money = (rule, value, cb) => {
    const reg = new RegExp('(^[1-9]([0-9]+)?(\\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\\.[0-9]([0-9])?$)')
    if (rule.required) {
        if (!value && Number(value) !== 0) {
            cb(new Error('请输入金额'))
        } else if (!reg.test(value)) {
            cb(new Error('请输入正确的金额'))
        } else {
            cb()
        }
    } else if (value && !reg.test(value)) {
        cb(new Error('请输入正确的金额'))
    } else {
        cb()
    }
}
// 数字 可以是负数
const negNumber = (rule, value, cb) => {
    const reg = new RegExp('^[+-]?[0-9]+(.[0-9]+)?$')
    if (rule.required) {
        if (!value && Number(value) !== 0) {
            cb(new Error('请输入信息'))
        } else if (!reg.test(value)) {
            cb(new Error('只能输入数字'))
        } else {
            cb()
        }
    } else if (value && !reg.test(value)) {
        cb(new Error('只能输入数字'))
    } else {
        cb()
    }
}

// 验证角色中文名称
const nameCn = (rule, value, cb) => {
    const reg = /^[\u4E00-\u9FFF-a-zA-Z]+?$/
    if (rule.required) {
        if (!value) {
            cb(new Error('请输入名称'))
        } else if (!reg.test(value)) {
            cb(new Error('请输入正确格式(只能是汉字/英文)'))
        } else {
            cb()
        }
    } else if (value && !reg.test(value)) {
        cb(new Error('请输入正确格式(只能是汉字/英文)'))
    } else {
        cb()
    }
}

//  密码输入验证
const password = (rule, value, cb) => {
    const message = rule.msg || '请输入密码'
    const reg = /^[A-Za-z0-9]{6,11}$/
    if (rule.required) {
        if (!value) {
            cb(new Error(message))
        } else if (!reg.test(value)) {
            cb(new Error('请输入正确格式(6-11位英文或数字)'))
        } else {
            cb()
        }
    } else if (value && !reg.test(value)) {
        cb(new Error('请输入正确格式(6-11位英文或数字)'))
    } else {
        cb()
    }
}

//  空间编码验证
const detailNo = (rule, value, cb) => {
    const message = rule.msg || '请输入空间编码'
    const reg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).{6,30}$/
    if (rule.required) {
        if (!value) {
            cb(new Error(message))
        } else if (!reg.test(value)) {
            cb(new Error('请输入正确格式(6-30位字母、数字或特殊符号)'))
        } else {
            cb()
        }
    } else if (value && !reg.test(value)) {
        cb(new Error('请输入正确格式(6-30位字母、数字或特殊符号)'))
    } else {
        cb()
    }
}

//  非空验证
const notEmpty = (rule, value, cb) => {
    const message = rule.msg || '请输入用户名'
    const reg = /^\S{1,20}$/
    if (rule.required) {
        if (!value) {
            cb(new Error(message))
        } else if (!reg.test(value)) {
            cb(new Error('请输入正确格式(1-20非空字符)'))
        } else {
            cb()
        }
    } else if (value && !reg.test(value)) {
        cb(new Error('请输入正确格式(1-20非空字符)'))
    } else {
        cb()
    }
}

//  非空验证
const expCheck = (rule, value, cb) => {
    const message = rule.msg || '请输入集合'
    const reg = () => {
        const regs = /^[([](-∞{1}|\d+),(\d+|\+∞{1})[)\]]$/
        let arr = value.replace(/^[([]|[)\]]$/g, '').split(',')
        if (value.indexOf('[-∞') > -1 || value.indexOf('+∞]') > -1) return false
        else if (Number(arr[0]) && Number(arr[1]) && Number(arr[0]) >= Number(arr[1])) return false
        else return regs.test(value)
    }
    // console.log(value)
    if (rule.required) {
        if (!value) {
            cb(new Error(message))
        } else if (!reg(value)) {
            cb(new Error('请输入正确的集合'))
        } else {
            cb()
        }
    } else if (value && !reg(value)) {
        cb(new Error('请输入正确的集合'))
    } else {
        cb()
    }
}

// 字母、数字、下划线组成,首位不能为数字
const checkIdentifier = (rule, value, cb) => {
    const message = rule.msg || '不能为空'
    const reg = /^[a-zA-Z_][a-zA-Z0-9_]{0,}$/
    if (value && !value.trim().length) {
        cb(new Error(message))
    } else if (!reg.test(value)) {
        cb(new Error('需由字母/数字/下划线组成,且首位不能为数字'))
    } else {
        cb()
    }
}
// 任意字符但是排除中括号和大括号
const checkName = (rule, value, cb) => {
    const message = rule.msg || '不能为空'
    const reg = /^[^{}[\]]*$/
    if (value && !value.trim().length) {
        cb(new Error(message))
    } else if (!reg.test(value)) {
        cb(new Error('任意字符但是排除中括号和大括号'))
    } else {
        cb()
    }
}
/**
 * 校验ip地址
 */
const checkIp = (rule, value, cb) => {
    const reg = /^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}$/
    const message = rule.msg || '不能为空'
    if (!value) {
        return cb(new Error(message))
    } else if (!reg.test(value)) {
        return cb(new Error('IP地址格式错误'))
    } else {
        cb()
    }
}

const checkNetMask = (rule, value, cb) => {
    const reg = /^(254|252|248|240|224|192|128|0)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(255|254|252|248|240|224|192|128|0)$/
    if (!value) {
        return cb(new Error('不能为空'))
    } else if (!reg.test(value)) {
        return cb(new Error('格式有误'))
    }
    cb()
}

export { phone, email, companyCode, englishAndNum, positiveInteger, number, money, nameCn, password, expCheck, negNumber, detailNo, notEmpty, checkIdentifier, checkName, checkIp, checkNetMask }
