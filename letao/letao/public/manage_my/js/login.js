$(function () {

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

                    // 长度校验
                    stringLength: {
                        min: 2,
                        max: 24,
                        message: '用户名长度必须在6到30之间'
                    },
                    callback: {
                        message: '你妹的，会不会玩，账号都写错了'
                    }
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
                    callback: {
                        message: '回家玩屎去吧，密码错了,还搞个毛~！'
                    }
                }
            }
        }
    }).on('success.form.bv', function (e) {
        e.preventDefault();
        //使用ajax提交逻辑
        // 开启进度条

        NProgress.start();
        $.ajax({
            url: "/employee/employeeLogin",
            data: $("form").serialize(),
            type: 'post',
            success: function (backData) {
                // console.log(backData)
                if (backData.success == 1) {
                    window.location.href = "./index.html";
                } else {
                    var validator = $("form").data('bootstrapValidator')
                    console.log(backData)
                    if (backData.error == 1000) {
                        // 账号错误
                        validator.updateStatus('username', 'INVALID', 'callback');
                    } else if (backData.error == 1001) {
                        // 密码错误
                        validator.updateStatus('password', 'INVALID', 'callback');
                    }
                }

                // 进度条处理
                setTimeout(function () {
                    NProgress.done();
                }, 1000)
            }
        })
    });

    // 3.为重置表单绑定的点击事件
    $('button[type=reset]').click(function(){
        // 获取验证插件对象
        var validator = $('form').data('bootstrapValidator');
        // 获取表单校验实例
        validator.resetForm();
        
    })



})