import React from 'react'

const Component = () => {
    test(this.$t('0'))
    return (
        <div>
            <input
                type={this.$t('1')}
                placeholder={this.$t('2')}
                value={`s ${this.$t('3')} f`}
            />

            <MyComponent>
                {`${this.$t('4')} `}<header slot="header">{this.$t('5')}</header>{` ${this.$t('4')}`}
                {`${this.$t('4')} `}<footer slot="footer">{this.$t('6')}</footer>{` ${this.$t('4')}`}
            </MyComponent>
        </div>
    )
}

export default Component