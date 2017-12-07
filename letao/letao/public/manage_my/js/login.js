$(function () {
    // ajax向服务器发送数据
    // $('button[type=submit]').click(function (event) {
    //     event.preventDefault();
    //     $.ajax({
    //         url: "/employee/employeeLogin",
    //         data: $("form").serialize(),
    //         type: 'post',
    //         success: function (backData) {
    //             console.log(backData);
    //         }
    //     })
    // })
    // 表单验证
    $("form").bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        //3. 指定校验字段
        fields: {
            username: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 2,
                        max: 24,
                        message: '用户名长度必须在6到30之间'
                    },
                }
            },
            password: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 2,
                        max: 24,
                        message: '密码长度必须在6到30之间'
                    },
                }
            }
        }
    }).on('success.form.bv', function (e) {
        e.preventDefault();
        //使用ajax提交逻辑
        $.ajax({
            url: "/employee/employeeLogin",
            data: $("form").serialize(),
            type: 'post',
            success: function (backData) {
                console.log(backData)
                if(backData==1){
                    window.location.href=("./index.html")
                    console.log(backData)
                } else {
                    console.log(backData)
                    if (backData==1000){
                        console.log(backData)
                    } else if (backData == 1000){
                        console.log(backData)
                    }
                }
            }
        })
    });
})