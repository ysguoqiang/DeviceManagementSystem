/**
 * 左侧导航视图
 * @date 2014-10-31
 */
Ext.define('SauceApp.view.Doordu.LeftNav.NavTree', {
    extend: 'Ext.tree.Panel',
    xtype: 'NavTree',
    title: 'Navigation',
    width: 200,
    split: true,
    collapsible: true,
    rootVisible: false,
    requires: [
        'SauceApp.view.Doordu.LeftNav.LeftNavController'
    ],
    controller: 'LeftNav',
    listeners: {
        itemclick: 'onTreeClick'
    },
    
    initComponent: function() {
        Ext.define('NavLink', {
            extend: 'Ext.data.Model',
            fields: [
                {name: 'id', type: 'string'},
                {name: 'text', type: 'string'},
                {name: 'level'}
            ],
            idProperty :['id'],
            proxy: {
                type: 'ajax',
                url: 'index.php/privileges/NavList'
            },
            reader : {
				type : 'json',
				root : 'data',
				idProperty : 'id'
			}
        });
        
        this.store = Ext.create('Ext.data.TreeStore', {
            model: 'NavLink',
            sorters: 'level',
            root: {
                expanded: true
            }
        });
        this.callParent(arguments);
    }
});