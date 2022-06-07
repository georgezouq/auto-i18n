import React from 'react'

const Component = () => {
    test('这是一个测试')
    return (
        <div>
            <input
                type="二"
                placeholder="一"
                value="s 四 f"
            />

            <MyComponent>
                非常好 <header slot="header">测试</header> 非常好
                非常好 <footer slot="footer">再一次测试</footer> 非常好
            </MyComponent>
        </div>
    )
}

export default Component