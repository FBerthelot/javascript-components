<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>


<jahia-npm-resource name="@jahia/react-dxcomponents"></jahia-npm-resource>

<script>
    Promise.all([System.import("react"), System.import("react-dom"), System.import("@jahia/react-dxcomponents")]).then(function(m) {
        var React = m[0];
        var ReactDOM = m[1];
        var dxComponents = m[2];
        var pickerid = "picker${fn:replace(currentNode.identifier,'-','_')}"
        var storeid = "${currentNode.properties['storeId'].string}";

        ReactDOM.render(React.createElement(dxComponents.Picker, {
            id : storeid,
            rootPaths: ["${currentNode.properties['rootPath'].string}"],
            openPaths: ["${currentNode.properties['rootPath'].string}"],
            openableTypes: ['nt:base'],
            selectableTypes: ['nt:base'],
            pickerType: "redux",
            fragments: ["displayName"],
            variables: { lang:"${currentNode.session.locale}" },
            textRenderer: (entry) => entry.node.displayName
        }), document.getElementById(pickerid));
    });
</script>
[Content picker]
<div id="picker${fn:replace(currentNode.identifier,'-','_')}" ></div>