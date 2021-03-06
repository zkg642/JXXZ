﻿Ext.define('TianZun.view.accountmanager.accountimage.ImageMonthList', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.imageMonthList',
    layout: 'fit',

    initComponent: function () {
        var store = Ext.create('TianZun.store.accountmanager.accountimage.AccountImageMonth', { proxy: { type: 'ajax', extraParams: { tz_type: this.record.get("srid") } } });

        this.items = [
            {
                xtype: 'grid',
                columnLines: true,
                name:'imageMonth',
                columns: [
                        { header: '序号', xtype: 'rownumberer', width: 60, align: 'center', sortable: false },
                        { header: '月份', dataIndex: 'createtime', flex: 1 },
                        { header: '类型', dataIndex: 'zd_name', flex: 1 },
                        { header: '台帐总数', dataIndex: 'count', flex: 1 },
                        { header: '文件大小', dataIndex: 'sum_size', flex: 1 }
                ],
                store: store,
                tbar: [
                   {
                       text: '返回',
                       handler: 'onCancel',
                       handleMouseEvents: false
                   },
                    //'->',
                    //{
                    //    text: '搜索条件',
                    //    handler: 'onQuery',
                    //    handleMouseEvents: false
                    //}
                ],
                listeners: {
                    itemdblclick: 'onMonthItemDbClick',
                }
            }

        ]

        this.callParent();
    }
});