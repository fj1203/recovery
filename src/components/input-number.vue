<template>
    <div class="mint-field-core">
        <input
            ref="input"
            :type="types[type].type"
            @input="_input"
            @keydown="_keydown"
            @keyup="_keyup"
            @focus="_focus"
            @blur="isFocus = false"
            :placeholder="placeholder"
            :maxlength="types[type].fmaxlength"
            class="mint-field-core ime-disabled"
        />
        <div class="mint-field-clear" v-if="isFocus && val.length > 0 && !noClear" @click="_clear">
            <i class="mintui mintui-field-error"></i>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        maxlength: {
            type: [Number, String],
            default: ''
        },
        noClear: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        value (val) {
            if (val !== this.val) {
                this.val = val;
                this.$refs.input.value = this.types[this.type].regExp(this.val);
            }
        }
    },
    data () {
        return {
            val: '',
            isFocus: false,
            selectionEnd: 0
        };
    },
    beforeCreate () {
        this.types = {
            phone: {
                type: 'tel',
                maxlength: 11,
                fmaxlength: 13,
                regExp (val) {
                    return val.replace(/^(\d{3})(?=\d)/g, "$1 ").replace(/(\d{4})(?=\d)/g, "$1 ");
                }
            },
            bankCard: {
                type: 'tel',
                maxlength: 19,
                fmaxlength: 23,
                regExp (val) {
                    return val.replace(/(\d{4})(?=\d)/g, "$1 ");
                }
            },
            idCard: {
                type: 'text',
                maxlength: 18,
                fmaxlength: 21,
                regExp (val) {
                    return val.replace(/^(\d{6})(\d{4})?(\d{4})?(\w{4})?/g, "$1 $2 $3 $4").replace(/\s+/g, ' ').replace(/\s$/, '');
                }
            }
        };
    },
    created () {
        this.val = this.value || '';
        if (!this.types[this.type]) {
            this.types[this.type] = {
                type: this.type,
                maxlength: this.maxlength,
                fmaxlength: this.maxlength,
                regExp (val) {
                    return val;
                }
            }
        }
    },
    mounted () {
        this.$refs.input.value = this.types[this.type].regExp(this.val);
    },
    methods: {
        _keyup (e) {
            // e.target.value = this.types[this.type].regExp(this.val);
        },
        _input (e) {
            console.log(11)
            this.selectionEnd = e.target.selectionEnd;
            if (e.target.value.length >= this.types[this.type].fmaxlength && this.val.length === this.types[this.type].maxlength) {
                this.$nextTick(() => {
                    e.target.value = this.types[this.type].regExp(this.val);
                    e.target.setSelectionRange(this.selectionEnd, this.selectionEnd);
                });
                return;
            }
            let checkVal = e.target.value.replace(/[\d\s]/g, '');
            let lastChar = e.target.value.substr(e.target.value.length - 1, 1).toUpperCase();
            lastChar = lastChar === 'X' && this.type === 'idCard' ? lastChar : '';
            let isOtherChar = (checkVal && !lastChar) || checkVal.length > 1;
            // 输入 除了数字的其他字符
            if (isOtherChar) {
                this.$nextTick(() => {
                    e.target.value = this.types[this.type].regExp(this.val);
                    e.target.setSelectionRange(this.selectionEnd -= 1, this.selectionEnd);
                });
                return;
            }
            let _val = this.val;
            let _val1 = this.types[this.type].regExp(_val);
            let val = e.target.value.replace(/[^\d]/g, '');
            // 前后的value相同，说明删除的是空格，需要处理成把空格前面的数字也删除掉
            if (_val === (val + lastChar) && _val1 !== e.target.value) {
                this.val = _val1.substr(0, this.selectionEnd - 1) + _val1.substr(this.selectionEnd, _val1.length);
                this.val = this.val.replace(/[^\d]/g, '');
                this.selectionEnd -= 1;
            } else {
                this.val = val;
            }
            // 身份证最后一位输入是X添加
            if (lastChar && this.val.length === 17) {
                this.val += lastChar;
                this.selectionEnd += 1;
            }
            // Input value的重新赋值放在页面更新轮询中，避免光标闪到最后再重新定位
            this.$nextTick(() => {
                e.target.value = this.types[this.type].regExp(this.val);
                if (e.target.value.length > _val1.length) {
                    this.selectionEnd += e.target.value.substr(this.selectionEnd - 1, 1) === ' ' ? 1 : 0;
                } else {
                    this.selectionEnd -= e.target.value.substr(this.selectionEnd - 1, 1) === ' ' ? 1 : 0;
                }
                e.target.setSelectionRange(this.selectionEnd, this.selectionEnd);
            });
            this.$emit('input', this.val);
        },
        _keydown (e) {
            // if (e.keyCode !== 8) {
            //     e.preventDefault();
            // }
        },
        _focus () {
            // this.$refs.input.focus();
            this.isFocus = true;
            this.$emit('focus');
        },
        _clear () {
            this.$refs.input.value = '';
            this.$refs.input.focus();
            this.val = '';
            this.$emit('input', '');
        }
    }
};
</script>

<style lang="less" scoped>
.mint-field-core {
    position: relative;
    display: flex;
}
.mint-field-clear {
    right: 0;
}
</style>
