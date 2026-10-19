/* UI-only translations. Never rewrite form values, attributes used by the app, or editor content. */
(function () {
    'use strict';
    var zh = {
        'Dashboard':'仪表盘','Settings':'设置','Registries':'镜像仓库','Stacks':'堆栈','Services':'服务','Networks':'网络','Nodes':'节点','Volumes':'数据卷','Secrets':'密钥','Configs':'配置','Tasks':'任务','Users':'用户',
        'APPLICATIONS':'应用','INFRASTRUCTURE':'基础设施','DATA':'数据','CLUSTER':'集群','DISK':'磁盘','General':'常规','Resources':'资源','Deployment':'部署','Environment':'环境','Network':'网络','Registry':'镜像仓库','Volume':'数据卷','Service':'服务','Stack':'堆栈','Task':'任务','Node':'节点','Config':'配置','Container':'容器','Image':'镜像',
        'Name':'名称','ID':'标识','Type':'类型','Value':'值','Created':'创建时间','Last Update':'最后更新时间','Last update':'最后更新时间','Updated':'更新时间','State':'状态','Status':'状态','Role':'角色','Labels':'标签','Label':'标签','Description':'描述','Address':'地址','Engine':'引擎','OS':'操作系统','Arch':'架构','Scope':'范围','Mountpoint':'挂载点','Region':'区域','Namespaces':'命名空间','User':'用户','Username':'用户名','Password':'密码','New password':'新密码','New Password':'新密码','Confirm password':'确认密码','Email':'邮箱','Is Admin':'是否管理员','Admin':'管理员','Manager':'管理节点','Worker':'工作节点','View Only':'仅查看','Active':'启用','Pause':'暂停','Drain':'排空','Public':'公开','Private':'私有','Hosted':'托管','Custom':'自定义','Secured':'受保护','Authentication':'身份验证','Authorization':'授权','Authorization Token':'授权令牌',
        'Delete':'删除','Remove':'移除','Edit':'编辑','Save':'保存','Create':'创建','Add':'添加','Update':'更新','Cancel':'取消','Close':'关闭','Back':'返回','Next':'下一步','Previous':'上一步','Finish':'完成','Change':'修改','Search':'搜索','Search ':'搜索 ','Search logs ...':'搜索日志…','Show filters':'显示筛选','Hide filters':'隐藏筛选','Filter':'筛选','Loading':'加载中','Menu':'菜单','Actions':'操作','Pin':'置顶','Detach':'分离','Stop':'停止','Start':'启动','Restart':'重启','Deploy':'部署','Redeploy':'重新部署','Rollback':'回滚','Activate stack':'激活堆栈','Deactivate':'停用','Generate':'生成','Select':'选择','Copy':'复制','Download':'下载','Upload':'上传','Refresh':'刷新','Clear':'清空','Submit':'提交','Login':'登录','Log in':'登录','Sign in':'登录','Logout':'退出登录','Log out':'退出登录',
        'New Config':'新建配置','New network':'新建网络','New secret':'新建密钥','New service':'新建服务','New stack':'新建堆栈','New volume':'新建数据卷','New user':'新建用户','Create config':'创建配置','Create network':'创建网络','Create secret':'创建密钥','Create service':'创建服务','Create stack':'创建堆栈','Create user':'创建用户','Create volume':'创建数据卷','Create admin':'创建管理员','Edit stack':'编辑堆栈','Edit service':'编辑服务','Edit registry':'编辑镜像仓库','Edit node':'编辑节点','Edit user':'编辑用户','Delete registry':'删除镜像仓库','Delete config?':'删除配置？','Delete network?':'删除网络？','Delete node?':'删除节点？','Delete secret?':'删除密钥？','Delete service?':'删除服务？','Delete stack?':'删除堆栈？','Delete stackfile?':'删除堆栈文件？','Delete user?':'删除用户？','Delete volume?':'删除数据卷？','Remove account?':'移除账户？',
        'CPU utilization by Node':'各节点 CPU 使用率','Memory utilization by Node':'各节点内存使用率','CPU usage by Service':'各服务 CPU 使用量','Memory usage by Service':'各服务内存使用量','CPU usage':'CPU 使用量','CPU Usage':'CPU 使用量','Memory usage':'内存使用量','Memory Usage':'内存使用量','Memory':'内存','Reservation':'预留量','Limit':'上限','Replicas':'副本数','Replicated':'副本模式','Global':'全局模式','Command':'命令','Entrypoint':'入口点','Hostname':'主机名','IP address':'IP 地址','Image digest':'镜像摘要','Image tag':'镜像标签','Ports':'端口','Port':'端口','Container port':'容器端口','Host port':'宿主机端口','Protocol':'协议','Mode':'模式','Target':'目标','Host':'宿主机','Container path':'容器路径','Host path':'宿主机路径','Read only':'只读','Read Only':'只读','Mounts':'挂载','Binds':'绑定挂载','Anonymous volumes':'匿名数据卷','Extra hosts':'额外主机','Variables':'变量','Environment variables':'环境变量','Logs':'日志','View log':'查看日志','Log Driver':'日志驱动','Driver':'驱动','Network driver':'网络驱动','Volume driver':'数据卷驱动','Driver options':'驱动选项','Driver settings':'驱动设置',
        'Subnet':'子网','Gateway':'网关','Is Internal':'内部网络','Is Attachable':'允许附加','Is Ingress':'入口网络','Enable IPV6':'启用 IPv6','Attach to network':'连接到网络','Availability':'可用性','Availability of the node':'节点可用状态','Filter by node role':'按节点角色筛选','Filter by service state':'按服务状态筛选','Filter by task state':'按任务状态筛选','Condition':'条件','Placement':'调度约束','Specify placement constraints':'指定调度约束','Restart Policy':'重启策略','Rollback Config':'回滚配置','Attempts':'尝试次数','Max Attempts':'最大尝试次数','Delay':'延迟','Window':'时间窗口','Parallelism':'并行度','Order':'顺序','Failure action':'失败时操作','On Failure':'失败时','Autoredeploy':'自动重新部署','Auto-redeploy':'自动重新部署','Official Image':'官方镜像','Repository source':'仓库来源','Find repository':'查找仓库','Registry name':'仓库名称','Registry account type':'仓库账户类型','Link registry':'关联仓库','Registry url':'仓库地址','Gitlab url':'GitLab 地址','Hosted Gitlab':'托管的 GitLab','Personal Access Token':'个人访问令牌','New Personal Access Token':'新个人访问令牌','Custom API':'自定义 API','Access Key Id':'访问密钥 ID','Secret Access Key':'访问密钥','Service Principal Name':'服务主体名称','Service Principal ID':'服务主体 ID','Service Principal Password':'服务主体密码',
        'Compose':'Compose','Compose file':'Compose 文件','Current engine state':'当前引擎状态','Original compose':'原始 Compose','No changes':'无更改','Diff':'差异','History':'历史','Service name':'服务名称','Specify name or leave empty for random':'指定名称，留空则随机生成','Specify stack name':'指定堆栈名称','Specify config name':'指定配置名称','Specify network name':'指定网络名称','Specify secret name':'指定密钥名称','Specify volume name or leave empty for random':'指定数据卷名称，留空则随机生成','Specify image tag or leave empty for latest':'指定镜像标签，留空使用 latest','Search a tag':'搜索标签','Enter valid repository':'请输入有效的仓库地址','The command to be run in the image':'在镜像中执行的命令','Overrides the image ENTRYPOINT. Command above is passed as arguments.':'覆盖镜像 ENTRYPOINT，上方命令将作为参数传入。','Use minimum of 4 MiB or leave blank for unlimited':'至少 4 MiB，留空表示不限制','Driver to manage the Network ':'用于管理网络的驱动 ','Driver to manage the Volume ':'用于管理数据卷的驱动 ','Subnet in CIDR format that represents a network segment':'使用 CIDR 格式表示网络段的子网','IPv4 or IPv6 Gateway for the master subnet':'主子网的 IPv4 或 IPv6 网关','without image resolution':'不解析镜像','Nothing matches this filter.':'没有符合筛选条件的结果。','No configs defined for the service.':'服务未定义配置。','No extra hosts defined for the service.':'服务未定义额外主机。','No labels defined for the service.':'服务未定义标签。','No mounts defined for the service.':'服务未定义挂载。','No secrets defined for the service.':'服务未定义密钥。','Make account Public':'将账户设为公开','Secured access':'安全访问','Use basic auth within the registry':'在镜像仓库中使用基本身份验证','Create first admin account and sign in.':'创建首个管理员账户并登录。','Group of interrelated services that are orchestrated and scaled together':'协同编排和扩缩容的相关服务集合','Connect services together by pluggable networks':'通过可插拔网络连接服务','Blob of data, such as a password or SSH private key':'数据内容，例如密码或 SSH 私钥',
        'New':'新建','Yes':'是','No':'否','Enabled':'已启用','Disabled':'已禁用','Running':'运行中','Pending':'等待中','Failed':'失败','Complete':'已完成','Completed':'已完成','Error':'错误','Warning':'警告','Success':'成功','Overview':'概览','Details':'详情','Information':'信息','Options':'选项','Advanced':'高级','None':'无','All':'全部','Total':'合计','Page':'页','Rows per page:':'每页行数：','Task cpu usage per Limit (resource/node)':'任务 CPU 使用量占上限比例（资源/节点）','Task memory usage per Limit (resource/node)':'任务内存使用量占上限比例（资源/节点）','Url':'地址','Server request failed':'服务器请求失败','Toggle password visibility':'切换密码可见性','Add option':'添加选项','Add label':'添加标签','See stack':'查看堆栈','Registry update failed. ':'镜像仓库更新失败。 ','Registry removing failed. ':'镜像仓库移除失败。 ','Repositories fetching failed. ':'获取仓库列表失败。 ','Stack update failed. ':'堆栈更新失败。 ','Add port':'添加端口','Add host mapping':'添加主机映射','Add variable':'添加变量','Add mount':'添加挂载','Add config':'添加配置','Add secret':'添加密钥','Update Config':'更新配置','Define Role':'定义角色','Specify account priviledges level':'指定账户权限级别','Dockerhub account':'Docker Hub 账户','Authenticated with user':'已通过用户认证','Registry v2':'镜像仓库 v2','Dockerhub':'Docker Hub','Gitlab registry':'GitLab 镜像仓库','Network ':'网络','Config ':'配置','Node ':'节点','Registry ':'镜像仓库','Secret ':'密钥','Service ':'服务','Stack ':'堆栈','User ':'用户','Volume ':'数据卷','not running':'未运行','partly running':'部分运行','Total (':'合计（','CPU  ':'CPU  ','Amazon ECR':'Amazon ECR','Azure ACR':'Azure ACR',
        'Password change':'修改密码','API Access':'API 访问','Swagger API':'Swagger API','Password has been changed':'密码已修改','Copy your token and store it safely, value will be displayed only once.':'请妥善保存令牌，仅显示一次。','Failed to generate API token.':'生成 API 令牌失败。','Failed to remove API token.':'移除 API 令牌失败。','Store non-sensitive information such as config files':'存储配置文件等非敏感信息','Define image for new service':'为新服务指定镜像','Update Azure ACR account settings':'更新 Azure ACR 账户设置','Update Dockerhub account settings':'更新 Docker Hub 账户设置','Update Amazon ECR account settings':'更新 Amazon ECR 账户设置','Update Gitlab account settings':'更新 GitLab 账户设置','Update Registry v2 account settings':'更新镜像仓库 v2 账户设置','What you are looking for, I do not have.':'未找到您要查找的内容。'
    };
    // Only these explicit UI message prefixes may precede dynamic names or server errors.
    var prefixes = {
        'Running: ':'运行中：','Authenticated with user ':'已认证用户 ','Dockerhub account ':'Docker Hub 账户 ','Docker hub account ':'Docker Hub 账户 ','Gitlab registry ':'GitLab 镜像仓库 ','No configs found. Create new ':'未找到配置，请新建 ',
        'Config creation failed. ':'创建配置失败。 ','Config removing failed. ':'移除配置失败。 ','Network creation failed. ':'创建网络失败。 ','Network removing failed. ':'移除网络失败。 ','Node update failed. ':'更新节点失败。 ','Node removal failed. ':'移除节点失败。 ','Node pin failed. ':'置顶节点失败。 ','Node detach failed. ':'分离节点失败。 ',
        'Azure ACR creation failed. ':'创建 Azure ACR 失败。 ','Docker hub account creation failed. ':'创建 Docker Hub 账户失败。 ','Dockerhub account update failed. ':'更新 Docker Hub 账户失败。 ','Dockerhub account removal failed. ':'移除 Docker Hub 账户失败。 ','Amazon ECR creation failed. ':'创建 Amazon ECR 失败。 ','Gitlab registry creation failed. ':'创建 GitLab 镜像仓库失败。 ','Gitlab registry update failed. ':'更新 GitLab 镜像仓库失败。 ','Gitlab registry removing failed. ':'移除 GitLab 镜像仓库失败。 ','Registry creation failed. ':'创建镜像仓库失败。 ','Secret creation failed. ':'创建密钥失败。 ','Secret removing failed. ':'移除密钥失败。 ','Service creation failed. ':'创建服务失败。 ','Service update failed. ':'更新服务失败。 '
    };
    function translatedText(text) {
        if (Object.prototype.hasOwnProperty.call(zh, text)) return zh[text];
        for (var prefix in prefixes) {
            if (Object.prototype.hasOwnProperty.call(prefixes, prefix) && text.indexOf(prefix) === 0 && text.length > prefix.length) return prefixes[prefix] + text.slice(prefix.length);
        }
        return null;
    }
    var key = 'swarmpit-language';
    var lang;
    try { lang = localStorage.getItem(key) || (navigator.language.toLowerCase().indexOf('zh') === 0 ? 'zh-CN' : 'en'); }
    catch (e) { lang = navigator.language.toLowerCase().indexOf('zh') === 0 ? 'zh-CN' : 'en'; }
    var original = new WeakMap();
    var ignored = /^(SCRIPT|STYLE|TEXTAREA|OPTION|CODE|PRE|SVG|INPUT)$/;
    function skip(node) {
        for (var el = node.parentElement; el; el = el.parentElement) {
            if (ignored.test(el.tagName) || el.isContentEditable || el.classList.contains('CodeMirror') || el.classList.contains('cm-editor')) return true;
        }
        return false;
    }
    function updateText(node) {
        if (skip(node)) return;
        var now = node.nodeValue, source = original.get(node);
        if (source) {
            var base = source.trim(), translated = source.slice(0, source.indexOf(base)) + translatedText(base) + source.slice(source.indexOf(base) + base.length);
            if (now !== source && now !== translated) { source = null; original.delete(node); }
        }
        if (!source) {
            var trimmed = now.trim();
            if (translatedText(trimmed) === null) return;
            source = now;
            original.set(node, source);
        }
        var normalized = source.trim(), target = lang === 'zh-CN' ? translatedText(normalized) : normalized;
        var result = source.slice(0, source.indexOf(normalized)) + target + source.slice(source.indexOf(normalized) + normalized.length);
        if (now !== result) node.nodeValue = result;
    }
    function translate(root) {
        if (root.nodeType === Node.TEXT_NODE) { updateText(root); return; }
        if (root.nodeType !== Node.ELEMENT_NODE || ignored.test(root.tagName) || root.classList.contains('CodeMirror')) return;
        var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) updateText(walker.currentNode);
        // Only presentation attributes; never change value, name, href or data attributes.
        var elements = [root].concat(Array.prototype.slice.call(root.querySelectorAll('[placeholder],[title],[aria-label]')));
        elements.forEach(function (el) {
            if (el.tagName === 'IFRAME' || el.closest('.CodeMirror,.cm-editor')) return;
            ['placeholder','title','aria-label'].forEach(function (attr) {
                var v = el.getAttribute(attr);
                if (!v) return;
                var saved = el.getAttribute('data-i18n-original-' + attr);
                if (saved && v !== saved && v !== translatedText(saved)) saved = null;
                if (!saved && translatedText(v) !== null) saved = v;
                if (saved) {
                    el.setAttribute('data-i18n-original-' + attr, saved);
                    var translated = lang === 'zh-CN' ? translatedText(saved) : saved;
                    if (v !== translated) el.setAttribute(attr, translated);
                }
            });
        });
    }
    function button() {
        var el = document.createElement('button');
        el.id = 'swarmpit-language-toggle';
        el.type = 'button';
        el.style.cssText = 'position:fixed;right:12px;bottom:12px;z-index:2147483640;background:#65519f;color:#fff;border:0;border-radius:18px;padding:8px 13px;font:14px sans-serif;box-shadow:0 2px 8px #3338;cursor:pointer';
        el.onclick = function () {
            lang = lang === 'zh-CN' ? 'en' : 'zh-CN';
            try { localStorage.setItem(key, lang); } catch (e) { /* private mode */ }
            document.documentElement.lang = lang;
            buttonLabel(); translate(document.body);
        };
        document.body.appendChild(el);
        buttonLabel();
    }
    function buttonLabel() {
        var el = document.getElementById('swarmpit-language-toggle');
        if (el) { el.textContent = lang === 'zh-CN' ? 'English' : '简体中文'; el.title = lang === 'zh-CN' ? 'Switch to English' : '切换到简体中文'; }
    }
    function start() {
        document.documentElement.lang = lang;
        button(); translate(document.body);
        var observer = new MutationObserver(function (records) {
            records.forEach(function (record) {
                if (record.type === 'characterData') updateText(record.target);
                else if (record.type === 'attributes') translate(record.target);
                else record.addedNodes.forEach(translate);
            });
        });
        observer.observe(document.body, {subtree:true, childList:true, characterData:true, attributes:true, attributeFilter:['placeholder','title','aria-label']});
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
    else start();
}());
