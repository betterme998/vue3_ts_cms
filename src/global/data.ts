// 账号登录，获取token等信息
export const loginResult2 = {
  data: {
    code: 0,
    data: {
      id: 1,
      name: 'coderwhy11111111111111',
      token:
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImNvZGVyd2h5Iiwicm9sZSI6eyJpZCI6MSwibmFtZSI6Iui2hee6p-euoeeQhuWRmCJ9LCJpYXQiOjE3Mjg5NzU4MDEsImV4cCI6MTczMTU2NzgwMX0.FAzbT0cqJKoUqxLwKzaGzieYqP1P2nAef9Wj1DDaNvVrcpbrDX88WL-ru_O4C9ETCjChWG9D-dltOFb0ocRvmZqWH1nNdayI9ZUJb6nPTdI9wZZPe3P0RPlbWd3dA8Yhxvemcy_2CtgMNUN0cnggMWpzl639BgvMy-lGVW1Wu10'
    }
  },
  status: 200,
  statusText: 'OK',
  headers: {
    'content-length': '399',
    'content-type': 'application/json; charset=utf-8'
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    },
    adapter: ['xhr', 'http'],
    transformRequest: [null],
    transformResponse: [null],
    timeout: 10000,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {},
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    baseURL: 'http://codercba.com:5000',
    interceptors: {},
    url: '/login',
    data: '{"name":"coderwhy","password":"123456"}',
    method: 'post'
  },
  request: {}
}

// 2.获取登录用户的详细信息
export const userInfoResult2 = {
  data: {
    code: 0,
    data: {
      id: 1,
      name: 'coderwhy',
      realname: 'coderwhy',
      cellphone: 18812345678,
      enable: 1,
      createAt: '2021-01-02T10:20:26.000Z',
      updateAt: '2021-01-03T04:50:13.000Z',
      role: {
        id: 1,
        name: '超级管理员',
        intro: '所有权限',
        createAt: '2021-01-02T10:01:52.000Z',
        updateAt: '2021-01-02T10:01:52.000Z'
      },
      department: {
        id: 1,
        name: '总裁办',
        parentId: null,
        createAt: '2021-01-02T10:03:09.000Z',
        updateAt: '2021-01-05T08:25:46.000Z',
        leader: 'coderwhy'
      }
    }
  },
  status: 200,
  statusText: 'OK',
  headers: {
    'content-length': '470',
    'content-type': 'application/json; charset=utf-8'
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    },
    adapter: ['xhr', 'http'],
    transformRequest: [null],
    transformResponse: [null],
    timeout: 10000,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {},
    headers: {
      Accept: 'application/json, text/plain, */*',
      Authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImNvZGVyd2h5Iiwicm9sZSI6eyJpZCI6MSwibmFtZSI6Iui2hee6p-euoeeQhuWRmCJ9LCJpYXQiOjE3Mjg5ODA0NTcsImV4cCI6MTczMTU3MjQ1N30.S8fXqUStim8mQn-uAm7H7QSJUEhN8g8J1Bt1VnWESYofLM2SL5s0FZITZiJIw5mj176-EPC5URjqW0ZBGeEH7phtn_Dn0z9cQxtT2tLNPWUjLAf5pgnAsiqF3Tuch3f7H74Sbzb2gA5V-U0RfvUdCHq9cmb16jWGYfRGGSq_9Fc'
    },
    baseURL: 'http://codercba.com:5000',
    interceptors: {},
    url: 'users/1',
    method: 'get'
  },
  request: {}
}

// 3.根据角色请求用户的权限（菜单menus）
export const userMenusResult2 = {
  data: {
    code: 0,
    data: [
      {
        id: 38,
        name: '系统总览',
        type: 1,
        url: '/main/analysis',
        icon: 'el-icon-monitor',
        sort: 1,
        children: [
          {
            id: 39,
            url: '/main/analysis/overview',
            name: '核心技术',
            sort: 106,
            type: 2,
            children: null,
            parentId: 38
          },
          {
            id: 40,
            url: '/main/analysis/dashboard',
            name: '商品统计',
            sort: 107,
            type: 2,
            children: null,
            parentId: 38
          }
        ]
      },
      {
        id: 1,
        name: '系统管理',
        type: 1,
        url: '/main/system',
        icon: 'el-icon-setting',
        sort: 2,
        children: [
          {
            id: 2,
            url: '/main/system/user',
            name: '用户管理',
            sort: 100,
            type: 2,
            children: [
              {
                id: 5,
                url: null,
                name: '创建用户',
                sort: null,
                type: 3,
                parentId: 2,
                permission: 'system:users:create'
              },
              {
                id: 6,
                url: null,
                name: '删除用户',
                sort: null,
                type: 3,
                parentId: 2,
                permission: 'system:users:delete'
              },
              {
                id: 7,
                url: null,
                name: '修改用户',
                sort: null,
                type: 3,
                parentId: 2,
                permission: 'system:users:update'
              },
              {
                id: 8,
                url: null,
                name: '查询用户',
                sort: null,
                type: 3,
                parentId: 2,
                permission: 'system:users:query'
              }
            ],
            parentId: 1
          },
          {
            id: 3,
            url: '/main/system/department',
            name: '部门管理',
            sort: 101,
            type: 2,
            children: [
              {
                id: 17,
                url: null,
                name: '创建部门',
                sort: null,
                type: 3,
                parentId: 3,
                permission: 'system:department:create'
              },
              {
                id: 18,
                url: null,
                name: '删除部门',
                sort: null,
                type: 3,
                parentId: 3,
                permission: 'system:department:delete'
              },
              {
                id: 19,
                url: null,
                name: '修改部门',
                sort: null,
                type: 3,
                parentId: 3,
                permission: 'system:department:update'
              },
              {
                id: 20,
                url: null,
                name: '查询部门',
                sort: null,
                type: 3,
                parentId: 3,
                permission: 'system:department:query'
              }
            ],
            parentId: 1
          },
          {
            id: 4,
            url: '/main/system/menu',
            name: '菜单管理',
            sort: 103,
            type: 2,
            children: [
              {
                id: 21,
                url: null,
                name: '创建菜单',
                sort: null,
                type: 3,
                parentId: 4,
                permission: 'system:menu:create'
              },
              {
                id: 22,
                url: null,
                name: '删除菜单',
                sort: null,
                type: 3,
                parentId: 4,
                permission: 'system:menu:delete'
              },
              {
                id: 23,
                url: null,
                name: '修改菜单',
                sort: null,
                type: 3,
                parentId: 4,
                permission: 'system:menu:update'
              },
              {
                id: 24,
                url: null,
                name: '查询菜单',
                sort: null,
                type: 3,
                parentId: 4,
                permission: 'system:menu:query'
              }
            ],
            parentId: 1
          },
          {
            id: 25,
            url: '/main/system/role',
            name: '角色管理',
            sort: 102,
            type: 2,
            children: [
              {
                id: 26,
                url: null,
                name: '创建角色',
                sort: null,
                type: 3,
                parentId: 25,
                permission: 'system:role:create'
              },
              {
                id: 27,
                url: null,
                name: '删除角色',
                sort: null,
                type: 3,
                parentId: 25,
                permission: 'system:role:delete'
              },
              {
                id: 28,
                url: null,
                name: '修改角色',
                sort: null,
                type: 3,
                parentId: 25,
                permission: 'system:role:update'
              },
              {
                id: 29,
                url: null,
                name: '查询角色',
                sort: null,
                type: 3,
                parentId: 25,
                permission: 'system:role:query'
              }
            ],
            parentId: 1
          }
        ]
      },
      {
        id: 9,
        name: '商品中心',
        type: 1,
        url: '/main/product',
        icon: 'el-icon-goods',
        sort: 3,
        children: [
          {
            id: 15,
            url: '/main/product/category',
            name: '商品类别',
            sort: 104,
            type: 2,
            children: [
              {
                id: 30,
                url: null,
                name: '创建类别',
                sort: null,
                type: 3,
                parentId: 15,
                permission: 'system:category:create'
              },
              {
                id: 31,
                url: null,
                name: '删除类别',
                sort: null,
                type: 3,
                parentId: 15,
                permission: 'system:category:delete'
              },
              {
                id: 32,
                url: null,
                name: '修改类别',
                sort: null,
                type: 3,
                parentId: 15,
                permission: 'system:category:update'
              },
              {
                id: 33,
                url: null,
                name: '查询类别',
                sort: null,
                type: 3,
                parentId: 15,
                permission: 'system:category:query'
              }
            ],
            parentId: 9
          },
          {
            id: 16,
            url: '/main/product/goods',
            name: '商品信息',
            sort: 105,
            type: 2,
            children: [
              {
                id: 34,
                url: null,
                name: '创建商品',
                sort: null,
                type: 3,
                parentId: 16,
                permission: 'system:goods:create'
              },
              {
                id: 35,
                url: null,
                name: '删除商品',
                sort: null,
                type: 3,
                parentId: 16,
                permission: 'system:goods:delete'
              },
              {
                id: 36,
                url: null,
                name: '修改商品',
                sort: null,
                type: 3,
                parentId: 16,
                permission: 'system:goods:update'
              },
              {
                id: 37,
                url: null,
                name: '查询商品',
                sort: null,
                type: 3,
                parentId: 16,
                permission: 'system:goods:query'
              }
            ],
            parentId: 9
          }
        ]
      },
      {
        id: 41,
        name: '随便聊聊',
        type: 1,
        url: '/main/story',
        icon: 'el-icon-chat-line-round',
        sort: 4,
        children: [
          {
            id: 42,
            url: '/main/story/chat',
            name: '你的故事',
            sort: 108,
            type: 2,
            children: null,
            parentId: 41
          },
          {
            id: 43,
            url: '/main/story/list',
            name: '故事列表',
            sort: 109,
            type: 2,
            children: [],
            parentId: 41
          }
        ]
      }
    ]
  },
  status: 200,
  statusText: 'OK',
  headers: {
    'content-length': '4250',
    'content-type': 'application/json; charset=utf-8'
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    },
    adapter: ['xhr', 'http'],
    transformRequest: [null],
    transformResponse: [null],
    timeout: 10000,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {},
    headers: {
      Accept: 'application/json, text/plain, */*',
      Authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImNvZGVyd2h5Iiwicm9sZSI6eyJpZCI6MSwibmFtZSI6Iui2hee6p-euoeeQhuWRmCJ9LCJpYXQiOjE3Mjg5ODExNTMsImV4cCI6MTczMTU3MzE1M30.l6qy7YF5fgFw1wh3joE9Q0mJiFegD75tjsRT52DU17rMi2f6gS15mN8ZCc8zS70Gty8k8yrqQpDZXyaaYpb2z0_F6s3CRR9DWKO7Ug3LD1r4D2dv8mPm-DC8ka8LvRe6FFuaYQgLzInxQizv3i-FvTnAgwmGW7HLnAjHhNojKYA'
    },
    baseURL: 'http://codercba.com:5000',
    interceptors: {},
    url: '/role/1/menu',
    method: 'get'
  },
  request: {}
}

//5.请求所有角色/部门数据(roles/departments)数据
export const rolesResult2 = {
  data: {
    code: 0,
    data: {
      list: [
        {
          id: 14290,
          name: 'demo03',
          intro: '部门管理：增 菜单管理：所有',
          createAt: '2024-10-15T07:30:40.000Z',
          updateAt: '2024-10-15T07:30:40.000Z',
          menuList: [
            {
              id: 1,
              name: '系统管理',
              type: 1,
              url: '/main/system',
              icon: 'el-icon-setting',
              sort: 2,
              children: [
                {
                  id: 3,
                  url: '/main/system/department',
                  name: '部门管理',
                  sort: 101,
                  type: 2,
                  children: [
                    {
                      id: 17,
                      url: null,
                      name: '创建部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:create'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 4,
                  url: '/main/system/menu',
                  name: '菜单管理',
                  sort: 103,
                  type: 2,
                  children: [
                    {
                      id: 21,
                      url: null,
                      name: '创建菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:create'
                    },
                    {
                      id: 22,
                      url: null,
                      name: '删除菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:delete'
                    },
                    {
                      id: 23,
                      url: null,
                      name: '修改菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:update'
                    },
                    {
                      id: 24,
                      url: null,
                      name: '查询菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:query'
                    }
                  ],
                  parentId: 1
                }
              ]
            }
          ]
        },
        {
          id: 14287,
          name: 'demo02',
          intro: '部门管理：增、查  菜单管理：所有',
          createAt: '2024-10-15T07:07:20.000Z',
          updateAt: '2024-10-15T07:07:20.000Z',
          menuList: [
            {
              id: 38,
              name: '系统总览',
              type: 1,
              url: '/main/analysis',
              icon: 'el-icon-monitor',
              sort: 1,
              children: [
                {
                  id: 39,
                  url: '/main/analysis/overview',
                  name: '核心技术',
                  sort: 106,
                  type: 2,
                  children: null,
                  parentId: 38
                },
                {
                  id: 40,
                  url: '/main/analysis/dashboard',
                  name: '商品统计',
                  sort: 107,
                  type: 2,
                  children: null,
                  parentId: 38
                }
              ]
            },
            {
              id: 1,
              name: '系统管理',
              type: 1,
              url: '/main/system',
              icon: 'el-icon-setting',
              sort: 2,
              children: [
                {
                  id: 2,
                  url: '/main/system/user',
                  name: '用户管理',
                  sort: 100,
                  type: 2,
                  children: [
                    {
                      id: 5,
                      url: null,
                      name: '创建用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:create'
                    },
                    {
                      id: 6,
                      url: null,
                      name: '删除用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:delete'
                    },
                    {
                      id: 7,
                      url: null,
                      name: '修改用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:update'
                    },
                    {
                      id: 8,
                      url: null,
                      name: '查询用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 3,
                  url: '/main/system/department',
                  name: '部门管理',
                  sort: 101,
                  type: 2,
                  children: [
                    {
                      id: 17,
                      url: null,
                      name: '创建部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:create'
                    },
                    {
                      id: 20,
                      url: null,
                      name: '查询部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 4,
                  url: '/main/system/menu',
                  name: '菜单管理',
                  sort: 103,
                  type: 2,
                  children: [
                    {
                      id: 21,
                      url: null,
                      name: '创建菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:create'
                    },
                    {
                      id: 22,
                      url: null,
                      name: '删除菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:delete'
                    },
                    {
                      id: 23,
                      url: null,
                      name: '修改菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:update'
                    },
                    {
                      id: 24,
                      url: null,
                      name: '查询菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:query'
                    }
                  ],
                  parentId: 1
                }
              ]
            }
          ]
        },
        {
          id: 14284,
          name: '扫地僧',
          intro: '扫地',
          createAt: '2024-10-12T02:57:54.000Z',
          updateAt: '2024-10-12T02:57:54.000Z',
          menuList: [
            {
              id: 1,
              name: '系统管理',
              type: 1,
              url: '/main/system',
              icon: 'el-icon-setting',
              sort: 2,
              children: [
                {
                  id: 2,
                  url: '/main/system/user',
                  name: '用户管理',
                  sort: 100,
                  type: 2,
                  children: [
                    {
                      id: 5,
                      url: null,
                      name: '创建用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:create'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 3,
                  url: '/main/system/department',
                  name: '部门管理',
                  sort: 101,
                  type: 2,
                  children: [
                    {
                      id: 19,
                      url: null,
                      name: '修改部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:update'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 4,
                  url: '/main/system/menu',
                  name: '菜单管理',
                  sort: 103,
                  type: 2,
                  children: [
                    {
                      id: 21,
                      url: null,
                      name: '创建菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:create'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 25,
                  url: '/main/system/role',
                  name: '角色管理',
                  sort: 102,
                  type: 2,
                  children: [
                    {
                      id: 29,
                      url: null,
                      name: '查询角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:query'
                    }
                  ],
                  parentId: 1
                }
              ]
            }
          ]
        },
        {
          id: 14282,
          name: 'coderFish',
          intro: 'coderFish权限',
          createAt: '2024-10-09T15:46:38.000Z',
          updateAt: '2024-10-09T15:46:38.000Z',
          menuList: [
            {
              id: 38,
              name: '系统总览',
              type: 1,
              url: '/main/analysis',
              icon: 'el-icon-monitor',
              sort: 1,
              children: [
                {
                  id: 39,
                  url: '/main/analysis/overview',
                  name: '核心技术',
                  sort: 106,
                  type: 2,
                  children: null,
                  parentId: 38
                },
                {
                  id: 40,
                  url: '/main/analysis/dashboard',
                  name: '商品统计',
                  sort: 107,
                  type: 2,
                  children: null,
                  parentId: 38
                }
              ]
            },
            {
              id: 1,
              name: '系统管理',
              type: 1,
              url: '/main/system',
              icon: 'el-icon-setting',
              sort: 2,
              children: [
                {
                  id: 3,
                  url: '/main/system/department',
                  name: '部门管理',
                  sort: 101,
                  type: 2,
                  children: [
                    {
                      id: 19,
                      url: null,
                      name: '修改部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:update'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 4,
                  url: '/main/system/menu',
                  name: '菜单管理',
                  sort: 103,
                  type: 2,
                  children: [
                    {
                      id: 22,
                      url: null,
                      name: '删除菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:delete'
                    }
                  ],
                  parentId: 1
                }
              ]
            }
          ]
        },
        {
          id: 14277,
          name: '4324',
          intro: '444',
          createAt: '2024-10-09T07:41:34.000Z',
          updateAt: '2024-10-09T07:41:34.000Z',
          menuList: [
            {
              id: 38,
              name: '系统总览',
              type: 1,
              url: '/main/analysis',
              icon: 'el-icon-monitor',
              sort: 1,
              children: [
                {
                  id: 39,
                  url: '/main/analysis/overview',
                  name: '核心技术',
                  sort: 106,
                  type: 2,
                  children: null,
                  parentId: 38
                },
                {
                  id: 40,
                  url: '/main/analysis/dashboard',
                  name: '商品统计',
                  sort: 107,
                  type: 2,
                  children: null,
                  parentId: 38
                }
              ]
            },
            {
              id: 1,
              name: '系统管理',
              type: 1,
              url: '/main/system',
              icon: 'el-icon-setting',
              sort: 2,
              children: [
                {
                  id: 2,
                  url: '/main/system/user',
                  name: '用户管理',
                  sort: 100,
                  type: 2,
                  children: [
                    {
                      id: 5,
                      url: null,
                      name: '创建用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:create'
                    }
                  ],
                  parentId: 1
                }
              ]
            }
          ]
        },
        {
          id: 14276,
          name: '123',
          intro: '43242',
          createAt: '2024-10-09T07:41:11.000Z',
          updateAt: '2024-10-09T07:41:11.000Z',
          menuList: [
            {
              id: 38,
              name: '系统总览',
              type: 1,
              url: '/main/analysis',
              icon: 'el-icon-monitor',
              sort: 1,
              children: [
                {
                  id: 39,
                  url: '/main/analysis/overview',
                  name: '核心技术',
                  sort: 106,
                  type: 2,
                  children: null,
                  parentId: 38
                },
                {
                  id: 40,
                  url: '/main/analysis/dashboard',
                  name: '商品统计',
                  sort: 107,
                  type: 2,
                  children: null,
                  parentId: 38
                }
              ]
            },
            {
              id: 9,
              name: '商品中心',
              type: 1,
              url: '/main/product',
              icon: 'el-icon-goods',
              sort: 3,
              children: [
                {
                  id: 15,
                  url: '/main/product/category',
                  name: '商品类别',
                  sort: 104,
                  type: 2,
                  children: [
                    {
                      id: 30,
                      url: null,
                      name: '创建类别',
                      sort: null,
                      type: 3,
                      parentId: 15,
                      permission: 'system:category:create'
                    },
                    {
                      id: 31,
                      url: null,
                      name: '删除类别',
                      sort: null,
                      type: 3,
                      parentId: 15,
                      permission: 'system:category:delete'
                    },
                    {
                      id: 32,
                      url: null,
                      name: '修改类别',
                      sort: null,
                      type: 3,
                      parentId: 15,
                      permission: 'system:category:update'
                    },
                    {
                      id: 33,
                      url: null,
                      name: '查询类别',
                      sort: null,
                      type: 3,
                      parentId: 15,
                      permission: 'system:category:query'
                    }
                  ],
                  parentId: 9
                },
                {
                  id: 16,
                  url: '/main/product/goods',
                  name: '商品信息',
                  sort: 105,
                  type: 2,
                  children: [
                    {
                      id: 34,
                      url: null,
                      name: '创建商品',
                      sort: null,
                      type: 3,
                      parentId: 16,
                      permission: 'system:goods:create'
                    },
                    {
                      id: 35,
                      url: null,
                      name: '删除商品',
                      sort: null,
                      type: 3,
                      parentId: 16,
                      permission: 'system:goods:delete'
                    },
                    {
                      id: 36,
                      url: null,
                      name: '修改商品',
                      sort: null,
                      type: 3,
                      parentId: 16,
                      permission: 'system:goods:update'
                    },
                    {
                      id: 37,
                      url: null,
                      name: '查询商品',
                      sort: null,
                      type: 3,
                      parentId: 16,
                      permission: 'system:goods:query'
                    }
                  ],
                  parentId: 9
                }
              ]
            }
          ]
        },
        {
          id: 14275,
          name: 'ewq',
          intro: 'eww',
          createAt: '2024-10-09T07:40:18.000Z',
          updateAt: '2024-10-09T07:40:18.000Z',
          menuList: [
            {
              id: 38,
              name: '系统总览',
              type: 1,
              url: '/main/analysis',
              icon: 'el-icon-monitor',
              sort: 1,
              children: [
                {
                  id: 39,
                  url: '/main/analysis/overview',
                  name: '核心技术',
                  sort: 106,
                  type: 2,
                  children: null,
                  parentId: 38
                },
                {
                  id: 40,
                  url: '/main/analysis/dashboard',
                  name: '商品统计',
                  sort: 107,
                  type: 2,
                  children: null,
                  parentId: 38
                }
              ]
            }
          ]
        },
        {
          id: 14274,
          name: 'demo测试',
          intro: '11',
          createAt: '2024-10-09T03:37:05.000Z',
          updateAt: '2024-10-09T03:37:05.000Z',
          menuList: [
            {
              id: 1,
              name: '系统管理',
              type: 1,
              url: '/main/system',
              icon: 'el-icon-setting',
              sort: 2,
              children: [
                {
                  id: 2,
                  url: '/main/system/user',
                  name: '用户管理',
                  sort: 100,
                  type: 2,
                  children: [
                    {
                      id: 8,
                      url: null,
                      name: '查询用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:query'
                    }
                  ],
                  parentId: 1
                }
              ]
            }
          ]
        },
        {
          id: 14273,
          name: '前台',
          intro: '前台权限',
          createAt: '2024-10-08T16:07:04.000Z',
          updateAt: '2024-10-08T16:07:04.000Z',
          menuList: [
            {
              id: 38,
              name: '系统总览',
              type: 1,
              url: '/main/analysis',
              icon: 'el-icon-monitor',
              sort: 1,
              children: [
                {
                  id: 39,
                  url: '/main/analysis/overview',
                  name: '核心技术',
                  sort: 106,
                  type: 2,
                  children: null,
                  parentId: 38
                },
                {
                  id: 40,
                  url: '/main/analysis/dashboard',
                  name: '商品统计',
                  sort: 107,
                  type: 2,
                  children: null,
                  parentId: 38
                }
              ]
            },
            {
              id: 1,
              name: '系统管理',
              type: 1,
              url: '/main/system',
              icon: 'el-icon-setting',
              sort: 2,
              children: [
                {
                  id: 2,
                  url: '/main/system/user',
                  name: '用户管理',
                  sort: 100,
                  type: 2,
                  children: [
                    {
                      id: 5,
                      url: null,
                      name: '创建用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:create'
                    },
                    {
                      id: 6,
                      url: null,
                      name: '删除用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:delete'
                    },
                    {
                      id: 7,
                      url: null,
                      name: '修改用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:update'
                    },
                    {
                      id: 8,
                      url: null,
                      name: '查询用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 3,
                  url: '/main/system/department',
                  name: '部门管理',
                  sort: 101,
                  type: 2,
                  children: [
                    {
                      id: 17,
                      url: null,
                      name: '创建部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:create'
                    },
                    {
                      id: 18,
                      url: null,
                      name: '删除部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:delete'
                    },
                    {
                      id: 19,
                      url: null,
                      name: '修改部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:update'
                    },
                    {
                      id: 20,
                      url: null,
                      name: '查询部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 4,
                  url: '/main/system/menu',
                  name: '菜单管理',
                  sort: 103,
                  type: 2,
                  children: [
                    {
                      id: 21,
                      url: null,
                      name: '创建菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:create'
                    },
                    {
                      id: 22,
                      url: null,
                      name: '删除菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:delete'
                    },
                    {
                      id: 23,
                      url: null,
                      name: '修改菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:update'
                    },
                    {
                      id: 24,
                      url: null,
                      name: '查询菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 25,
                  url: '/main/system/role',
                  name: '角色管理',
                  sort: 102,
                  type: 2,
                  children: [
                    {
                      id: 26,
                      url: null,
                      name: '创建角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:create'
                    },
                    {
                      id: 27,
                      url: null,
                      name: '删除角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:delete'
                    },
                    {
                      id: 28,
                      url: null,
                      name: '修改角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:update'
                    },
                    {
                      id: 29,
                      url: null,
                      name: '查询角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:query'
                    }
                  ],
                  parentId: 1
                }
              ]
            }
          ]
        },
        {
          id: 4,
          name: '人事',
          intro: '人事管理',
          createAt: '2021-01-05T11:47:42.000Z',
          updateAt: '2021-01-05T11:50:11.000Z',
          menuList: [
            {
              id: 38,
              name: '系统总览',
              type: 1,
              url: '/main/analysis',
              icon: 'el-icon-monitor',
              sort: 1,
              children: [
                {
                  id: 39,
                  url: '/main/analysis/overview',
                  name: '核心技术',
                  sort: 106,
                  type: 2,
                  children: null,
                  parentId: 38
                },
                {
                  id: 40,
                  url: '/main/analysis/dashboard',
                  name: '商品统计',
                  sort: 107,
                  type: 2,
                  children: null,
                  parentId: 38
                }
              ]
            }
          ]
        }
      ],
      totalCount: 12
    }
  },
  status: 200,
  statusText: 'OK',
  headers: {
    'content-length': '12010',
    'content-type': 'application/json; charset=utf-8'
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    },
    adapter: ['xhr', 'http'],
    transformRequest: [null],
    transformResponse: [null],
    timeout: 10000,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {},
    headers: {
      Accept: 'application/json, text/plain, */*',
      Authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImNvZGVyd2h5Iiwicm9sZSI6eyJpZCI6MSwibmFtZSI6Iui2hee6p-euoeeQhuWRmCJ9LCJpYXQiOjE3Mjg5ODExNTMsImV4cCI6MTczMTU3MzE1M30.l6qy7YF5fgFw1wh3joE9Q0mJiFegD75tjsRT52DU17rMi2f6gS15mN8ZCc8zS70Gty8k8yrqQpDZXyaaYpb2z0_F6s3CRR9DWKO7Ug3LD1r4D2dv8mPm-DC8ka8LvRe6FFuaYQgLzInxQizv3i-FvTnAgwmGW7HLnAjHhNojKYA'
    },
    baseURL: 'http://codercba.com:5000',
    interceptors: {},
    url: '/role/list',
    method: 'post'
  },
  request: {}
}
export const departmentsResult2 = {
  data: {
    code: 0,
    data: {
      list: [
        {
          id: 7220,
          name: 'gg ',
          parentId: 7219,
          createAt: '2024-10-15T07:32:01.000Z',
          updateAt: '2024-10-15T07:32:01.000Z',
          leader: 'ga '
        },
        {
          id: 7219,
          name: '曼波',
          parentId: 4,
          createAt: '2024-10-15T04:51:04.000Z',
          updateAt: '2024-10-15T04:51:04.000Z',
          leader: '诗歌剧'
        },
        {
          id: 7218,
          name: '曼巴',
          parentId: 4,
          createAt: '2024-10-15T03:17:00.000Z',
          updateAt: '2024-10-15T03:33:05.000Z',
          leader: 'kobe11'
        },
        {
          id: 5,
          name: '人事部',
          parentId: 1,
          createAt: '2021-01-02T10:04:02.000Z',
          updateAt: '2021-05-02T07:33:08.000Z',
          leader: 'lily'
        },
        {
          id: 4,
          name: '客服部',
          parentId: 2,
          createAt: '2021-01-02T10:04:02.000Z',
          updateAt: '2021-08-03T11:14:32.000Z',
          leader: 'lily'
        },
        {
          id: 3,
          name: '运营部',
          parentId: 1,
          createAt: '2021-01-02T10:03:42.000Z',
          updateAt: '2021-01-05T08:25:52.000Z',
          leader: 'lucy'
        },
        {
          id: 2,
          name: '研发部',
          parentId: 1,
          createAt: '2021-01-02T10:03:21.000Z',
          updateAt: '2021-01-05T08:25:49.000Z',
          leader: 'lilei'
        },
        {
          id: 1,
          name: '总裁办',
          parentId: null,
          createAt: '2021-01-02T10:03:09.000Z',
          updateAt: '2021-01-05T08:25:46.000Z',
          leader: 'coderwhy'
        },
        {
          id: 0,
          name: '鸡你太美🐔',
          parentId: 1,
          createAt: '2024-02-01T07:12:41.000Z',
          updateAt: '2024-02-01T07:16:57.000Z',
          leader: '鸡你太美🐟'
        }
      ],
      totalCount: 9
    }
  },
  status: 200,
  statusText: 'OK',
  headers: {
    'content-length': '1273',
    'content-type': 'application/json; charset=utf-8'
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    },
    adapter: ['xhr', 'http'],
    transformRequest: [null],
    transformResponse: [null],
    timeout: 10000,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {},
    headers: {
      Accept: 'application/json, text/plain, */*',
      Authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImNvZGVyd2h5Iiwicm9sZSI6eyJpZCI6MSwibmFtZSI6Iui2hee6p-euoeeQhuWRmCJ9LCJpYXQiOjE3Mjg5ODExNTMsImV4cCI6MTczMTU3MzE1M30.l6qy7YF5fgFw1wh3joE9Q0mJiFegD75tjsRT52DU17rMi2f6gS15mN8ZCc8zS70Gty8k8yrqQpDZXyaaYpb2z0_F6s3CRR9DWKO7Ug3LD1r4D2dv8mPm-DC8ka8LvRe6FFuaYQgLzInxQizv3i-FvTnAgwmGW7HLnAjHhNojKYA'
    },
    baseURL: 'http://codercba.com:5000',
    interceptors: {},
    url: '/department/list',
    method: 'post'
  },
  request: {}
}
export const mainMenusResult2 = {
  data: {
    code: 0,
    data: {
      list: [
        {
          id: 38,
          name: '系统总览',
          type: 1,
          url: '/main/analysis',
          icon: 'el-icon-monitor',
          sort: 1,
          createAt: '2021-04-19T14:11:02.000Z',
          updateAt: '2021-08-20T06:59:55.000Z',
          children: [
            {
              id: 39,
              url: '/main/analysis/overview',
              name: '核心技术',
              sort: 106,
              type: 2,
              children: null,
              createAt: '2021-01-02 18:09:11.000000',
              parentId: 38,
              updateAt: '2021-08-19 15:54:41.000000'
            },
            {
              id: 40,
              url: '/main/analysis/dashboard',
              name: '商品统计',
              sort: 107,
              type: 2,
              children: null,
              createAt: '2021-01-02 18:09:22.000000',
              parentId: 38,
              updateAt: '2021-08-19 15:56:08.000000'
            }
          ]
        },
        {
          id: 1,
          name: '系统管理',
          type: 1,
          url: '/main/system',
          icon: 'el-icon-setting',
          sort: 2,
          createAt: '2021-01-02T10:08:14.000Z',
          updateAt: '2021-08-20T07:00:08.000Z',
          children: [
            {
              id: 2,
              url: '/main/system/user',
              name: '用户管理',
              sort: 100,
              type: 2,
              children: [
                {
                  id: 5,
                  url: null,
                  name: '创建用户',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 2,
                  updateAt: '2021-08-19 16:10:06.000000',
                  permission: 'system:users:create'
                },
                {
                  id: 6,
                  url: null,
                  name: '删除用户',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 2,
                  updateAt: '2021-08-19 16:10:21.000000',
                  permission: 'system:users:delete'
                },
                {
                  id: 7,
                  url: null,
                  name: '修改用户',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 2,
                  updateAt: '2021-08-19 16:10:24.000000',
                  permission: 'system:users:update'
                },
                {
                  id: 8,
                  url: null,
                  name: '查询用户',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 2,
                  updateAt: '2021-08-19 16:10:26.000000',
                  permission: 'system:users:query'
                }
              ],
              createAt: '2021-01-02 18:08:47.000000',
              parentId: 1,
              updateAt: '2021-08-19 15:52:01.000000'
            },
            {
              id: 3,
              url: '/main/system/department',
              name: '部门管理',
              sort: 101,
              type: 2,
              children: [
                {
                  id: 17,
                  url: null,
                  name: '创建部门',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 3,
                  updateAt: '2021-04-19 21:59:39.000000',
                  permission: 'system:department:create'
                },
                {
                  id: 18,
                  url: null,
                  name: '删除部门',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 3,
                  updateAt: '2021-04-19 22:05:07.000000',
                  permission: 'system:department:delete'
                },
                {
                  id: 19,
                  url: null,
                  name: '修改部门',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 3,
                  updateAt: '2021-04-19 22:05:11.000000',
                  permission: 'system:department:update'
                },
                {
                  id: 20,
                  url: null,
                  name: '查询部门',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 3,
                  updateAt: '2021-04-19 22:05:14.000000',
                  permission: 'system:department:query'
                }
              ],
              createAt: '2021-01-02 18:09:11.000000',
              parentId: 1,
              updateAt: '2021-08-19 15:52:04.000000'
            },
            {
              id: 4,
              url: '/main/system/menu',
              name: '菜单管理',
              sort: 103,
              type: 2,
              children: [
                {
                  id: 21,
                  url: null,
                  name: '创建菜单',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 4,
                  updateAt: '2021-04-19 21:59:39.000000',
                  permission: 'system:menu:create'
                },
                {
                  id: 22,
                  url: null,
                  name: '删除菜单',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 4,
                  updateAt: '2021-04-19 22:05:18.000000',
                  permission: 'system:menu:delete'
                },
                {
                  id: 23,
                  url: null,
                  name: '修改菜单',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 4,
                  updateAt: '2021-04-19 22:05:21.000000',
                  permission: 'system:menu:update'
                },
                {
                  id: 24,
                  url: null,
                  name: '查询菜单',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 4,
                  updateAt: '2021-04-19 22:05:24.000000',
                  permission: 'system:menu:query'
                }
              ],
              createAt: '2021-01-02 18:09:22.000000',
              parentId: 1,
              updateAt: '2021-08-19 15:52:07.000000'
            },
            {
              id: 25,
              url: '/main/system/role',
              name: '角色管理',
              sort: 102,
              type: 2,
              children: [
                {
                  id: 26,
                  url: null,
                  name: '创建角色',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 25,
                  updateAt: '2021-04-19 21:59:39.000000',
                  permission: 'system:role:create'
                },
                {
                  id: 27,
                  url: null,
                  name: '删除角色',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 25,
                  updateAt: '2021-04-19 21:59:44.000000',
                  permission: 'system:role:delete'
                },
                {
                  id: 28,
                  url: null,
                  name: '修改角色',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 25,
                  updateAt: '2021-04-19 21:59:47.000000',
                  permission: 'system:role:update'
                },
                {
                  id: 29,
                  url: null,
                  name: '查询角色',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 25,
                  updateAt: '2021-04-19 21:59:49.000000',
                  permission: 'system:role:query'
                }
              ],
              createAt: '2021-01-02 18:09:22.000000',
              parentId: 1,
              updateAt: '2021-08-19 15:52:17.000000'
            }
          ]
        },
        {
          id: 9,
          name: '商品中心',
          type: 1,
          url: '/main/product',
          icon: 'el-icon-goods',
          sort: 3,
          createAt: '2021-01-05T12:15:56.000Z',
          updateAt: '2021-08-20T07:00:25.000Z',
          children: [
            {
              id: 15,
              url: '/main/product/category',
              name: '商品类别',
              sort: 104,
              type: 2,
              children: [
                {
                  id: 30,
                  url: null,
                  name: '创建类别',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 15,
                  updateAt: '2021-04-19 21:59:39.000000',
                  permission: 'system:category:create'
                },
                {
                  id: 31,
                  url: null,
                  name: '删除类别',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 15,
                  updateAt: '2021-04-19 21:59:44.000000',
                  permission: 'system:category:delete'
                },
                {
                  id: 32,
                  url: null,
                  name: '修改类别',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 15,
                  updateAt: '2021-04-19 21:59:47.000000',
                  permission: 'system:category:update'
                },
                {
                  id: 33,
                  url: null,
                  name: '查询类别',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 15,
                  updateAt: '2021-04-19 21:59:49.000000',
                  permission: 'system:category:query'
                }
              ],
              createAt: '2021-04-19 21:55:11.000000',
              parentId: 9,
              updateAt: '2021-08-19 15:52:12.000000'
            },
            {
              id: 16,
              url: '/main/product/goods',
              name: '商品信息',
              sort: 105,
              type: 2,
              children: [
                {
                  id: 34,
                  url: null,
                  name: '创建商品',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 16,
                  updateAt: '2021-08-19 17:29:46.000000',
                  permission: 'system:goods:create'
                },
                {
                  id: 35,
                  url: null,
                  name: '删除商品',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 16,
                  updateAt: '2021-08-19 17:29:50.000000',
                  permission: 'system:goods:delete'
                },
                {
                  id: 36,
                  url: null,
                  name: '修改商品',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 16,
                  updateAt: '2021-08-19 17:29:53.000000',
                  permission: 'system:goods:update'
                },
                {
                  id: 37,
                  url: null,
                  name: '查询商品',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 16,
                  updateAt: '2021-08-19 17:30:02.000000',
                  permission: 'system:goods:query'
                }
              ],
              createAt: '2021-04-19 21:57:33.000000',
              parentId: 9,
              updateAt: '2021-08-19 15:52:14.000000'
            }
          ]
        },
        {
          id: 41,
          name: '随便聊聊',
          type: 1,
          url: '/main/story',
          icon: 'el-icon-chat-line-round',
          sort: 4,
          createAt: '2021-04-19T14:11:02.000Z',
          updateAt: '2021-08-20T07:00:44.000Z',
          children: [
            {
              id: 42,
              url: '/main/story/chat',
              name: '你的故事',
              sort: 108,
              type: 2,
              children: null,
              createAt: '2021-01-02 18:09:11.000000',
              parentId: 41,
              updateAt: '2021-08-19 17:29:31.000000'
            },
            {
              id: 43,
              url: '/main/story/list',
              name: '故事列表',
              sort: 109,
              type: 2,
              children: [
                {
                  id: 10,
                  url: null,
                  name: '删除故事',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 43,
                  updateAt: '2021-04-19 21:59:44.000000',
                  permission: 'system:story:delete'
                },
                {
                  id: 11,
                  url: null,
                  name: '修改故事',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 43,
                  updateAt: '2021-04-19 21:59:47.000000',
                  permission: 'system:story:update'
                },
                {
                  id: 12,
                  url: null,
                  name: '查询故事',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 43,
                  updateAt: '2021-04-19 21:59:49.000000',
                  permission: 'system:story:query'
                }
              ],
              createAt: '2021-01-02 18:09:11.000000',
              parentId: 41,
              updateAt: '2021-08-19 15:52:29.000000'
            }
          ]
        }
      ]
    }
  },
  status: 200,
  statusText: 'OK',
  headers: {
    'content-length': '7860',
    'content-type': 'application/json; charset=utf-8'
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    },
    adapter: ['xhr', 'http'],
    transformRequest: [null],
    transformResponse: [null],
    timeout: 10000,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {},
    headers: {
      Accept: 'application/json, text/plain, */*',
      Authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImNvZGVyd2h5Iiwicm9sZSI6eyJpZCI6MSwibmFtZSI6Iui2hee6p-euoeeQhuWRmCJ9LCJpYXQiOjE3Mjg5ODExNTMsImV4cCI6MTczMTU3MzE1M30.l6qy7YF5fgFw1wh3joE9Q0mJiFegD75tjsRT52DU17rMi2f6gS15mN8ZCc8zS70Gty8k8yrqQpDZXyaaYpb2z0_F6s3CRR9DWKO7Ug3LD1r4D2dv8mPm-DC8ka8LvRe6FFuaYQgLzInxQizv3i-FvTnAgwmGW7HLnAjHhNojKYA'
    },
    baseURL: 'http://codercba.com:5000',
    interceptors: {},
    url: '/menu/list',
    method: 'post'
  },
  request: {}
}

// 商品统计
export const amountResult2 = [
  {
    amount: 'sale',
    title: '商品总销量',
    tips: '所有商品的总销量',
    subtitle: '商品总销量',
    number1: 509989,
    number2: 509989
  },
  {
    amount: 'favor',
    title: '商品总收藏',
    tips: '所有商品的总收藏',
    subtitle: '商品总收藏',
    number1: 87226,
    number2: 87226
  },
  {
    amount: 'inventory',
    title: '商品总库存',
    tips: '所有商品的总库存',
    subtitle: '商品总库存',
    number1: 853667,
    number2: 853667
  },
  {
    amount: 'saleroom',
    title: '商品总销售额',
    tips: '所有商品的总销售额',
    subtitle: '商品总销售额',
    number1: 43118530,
    number2: 43118530
  }
]
export const goodsCategoryCount2 = [
  {
    id: 2,
    name: '上衣',
    goodsCount: 14
  },
  {
    id: 3,
    name: '裤子',
    goodsCount: 19
  },
  {
    id: 4,
    name: '鞋子',
    goodsCount: 19
  },
  {
    id: 5,
    name: '厨具',
    goodsCount: 18
  },
  {
    id: 6,
    name: '家具',
    goodsCount: 18
  },
  {
    id: 7,
    name: '床上用品',
    goodsCount: 19
  },
  {
    id: 8,
    name: '女装',
    goodsCount: 35
  },
  {
    id: 9,
    name: 'Polo',
    goodsCount: 0
  }
]
export const goodsCategorySale2 = [
  { id: 2, name: '上衣', goodsCount: 49749 },
  { id: 3, name: '裤子', goodsCount: 84754 },
  { id: 4, name: '鞋子', goodsCount: 58283 },
  { id: 5, name: '厨具', goodsCount: 57354 },
  { id: 6, name: '家具', goodsCount: 49002 },
  { id: 7, name: '床上用品', goodsCount: 98579 },
  { id: 8, name: '女装', goodsCount: 112268 },
  { id: 9, name: 'Polo', goodsCount: null }
]
export const goodsCategoryFavor2 = [
  { id: 2, name: '上衣', goodsFavor: 6091 },
  { id: 3, name: '裤子', goodsFavor: 4939 },
  { id: 4, name: '鞋子', goodsFavor: 19647 },
  { id: 5, name: '厨具', goodsFavor: 13906 },
  { id: 6, name: '家具', goodsFavor: 15425 },
  { id: 7, name: '床上用品', goodsFavor: 7307 },
  { id: 8, name: '女装', goodsFavor: 19911 },
  { id: 9, name: 'Polo', goodsFavor: null }
]
export const goodsAddressSale2 = [
  { address: '上海', count: 62239 },
  { address: '南京', count: 55683 },
  { address: '郑州', count: 53716 },
  { address: '广州', count: 6364 },
  { address: '西安', count: 64976 },
  { address: '长沙', count: 4142 },
  { address: '昆明', count: 9524 },
  { address: '武汉', count: 28212 },
  { address: '重庆', count: 60777 },
  { address: '沈阳', count: 20900 },
  { address: '宁波', count: 66584 },
  { address: '苏州', count: 1136 },
  { address: '青岛', count: 9021 },
  { address: '成都', count: 23378 },
  { address: '北京', count: 6107 },
  { address: '天津', count: 5096 },
  { address: '深圳', count: 12480 },
  { address: '杭州', count: 19654 }
]

// 用户管理
export const pageListResult2 = {
  data: {
    code: 0,
    data: {
      list: [
        {
          id: 177050648,
          name: 'tt',
          realname: 'jiajia',
          cellphone: 123545456,
          enable: 1,
          departmentId: 4,
          roleId: 4,
          createAt: '2024-10-15T08:10:32.000Z',
          updateAt: '2024-10-15T08:10:32.000Z'
        },
        {
          id: 177050647,
          name: 'demo01',
          realname: 'demo01',
          cellphone: 123456789,
          enable: 1,
          departmentId: 0,
          roleId: 14290,
          createAt: '2024-10-15T07:08:49.000Z',
          updateAt: '2024-10-15T07:31:06.000Z'
        },
        {
          id: 177050646,
          name: '码家琪',
          realname: '307',
          cellphone: 3241351234132,
          enable: 1,
          departmentId: 4,
          roleId: 4,
          createAt: '2024-10-15T03:18:01.000Z',
          updateAt: '2024-10-15T03:18:01.000Z'
        },
        {
          id: 177050645,
          name: '黑曼巴',
          realname: '科比kobe',
          cellphone: 12478584534,
          enable: 1,
          departmentId: 4,
          roleId: 4,
          createAt: '2024-10-15T03:17:35.000Z',
          updateAt: '2024-10-15T03:17:35.000Z'
        },
        {
          id: 177050626,
          name: 'wqdwqdqw',
          realname: 'chenqewewdad',
          cellphone: 1999999999,
          enable: 1,
          departmentId: 4,
          roleId: 4,
          createAt: '2024-10-14T07:45:36.000Z',
          updateAt: '2024-10-14T07:45:36.000Z'
        },
        {
          id: 177050595,
          name: '23131',
          realname: 'cehnchen',
          cellphone: 341831313,
          enable: 1,
          departmentId: 4,
          roleId: 4,
          createAt: '2024-10-14T06:30:24.000Z',
          updateAt: '2024-10-14T06:30:24.000Z'
        },
        {
          id: 177050583,
          name: 'jam',
          realname: '詹斯',
          cellphone: 13322224447,
          enable: 1,
          departmentId: 2,
          roleId: 14282,
          createAt: '2024-10-13T11:21:05.000Z',
          updateAt: '2024-10-13T11:21:05.000Z'
        },
        {
          id: 177050559,
          name: 'coderFish',
          realname: 'fish',
          cellphone: 1234567890,
          enable: 1,
          departmentId: 2,
          roleId: 14282,
          createAt: '2024-10-09T15:47:33.000Z',
          updateAt: '2024-10-10T07:01:15.000Z'
        },
        {
          id: 177050529,
          name: 'jame',
          realname: '詹姆斯',
          cellphone: 13322223338,
          enable: 1,
          departmentId: 1,
          roleId: 1,
          createAt: '2024-10-08T12:19:02.000Z',
          updateAt: '2024-10-08T16:18:16.000Z'
        },
        {
          id: 9,
          name: 'lyh',
          realname: '李银河',
          cellphone: 17754456666,
          enable: 1,
          departmentId: 2,
          roleId: 3,
          createAt: '2021-05-02T07:24:12.000Z',
          updateAt: '2021-08-20T04:07:23.000Z'
        }
      ],
      totalCount: 20
    }
  },
  status: 200,
  statusText: 'OK',
  headers: { 'content-length': '1973', 'content-type': 'application/json; charset=utf-8' },
  config: {
    transitional: { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false },
    adapter: ['xhr', 'http'],
    transformRequest: [null],
    transformResponse: [null],
    timeout: 10000,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {},
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImNvZGVyd2h5Iiwicm9sZSI6eyJpZCI6MSwibmFtZSI6Iui2hee6p-euoeeQhuWRmCJ9LCJpYXQiOjE3MjkxMzQ0NDMsImV4cCI6MTczMTcyNjQ0M30.Tzj-LvnCaUnNLHc5zWVV5I3VjalNaiDx1Tn1GQ8djqdYPnj139H_rLY_bPZjnnNv3KoqnYMb93rwSTKbpLOHqSz70yaWqDxTQf1DdEQxGOw4IOEZ8vrdSpYemIsa2KQVff-5Y2bmR67KT5VQ42pU9u-dALwU1A2gcJajpN-26KE'
    },
    baseURL: 'http://codercba.com:5000',
    interceptors: {},
    url: '/users/list',
    data: '{"size":10,"offset":0}',
    method: 'post'
  },
  request: {}
}

// 部门管理
export const pageListResult3 = {
  data: {
    code: 0,
    data: {
      list: [
        {
          id: 7237,
          name: 'demo',
          parentId: 1,
          createAt: '2024-10-19T04:22:33.000Z',
          updateAt: '2024-10-19T11:24:01.000Z',
          leader: '112342'
        },
        {
          id: 7236,
          name: '3124',
          parentId: 4,
          createAt: '2024-10-19T04:22:23.000Z',
          updateAt: '2024-10-19T04:22:23.000Z',
          leader: '1234'
        },
        {
          id: 7235,
          name: '321432',
          parentId: 5,
          createAt: '2024-10-19T04:22:17.000Z',
          updateAt: '2024-10-19T04:22:17.000Z',
          leader: '123412'
        },
        {
          id: 5,
          name: '人事部',
          parentId: 1,
          createAt: '2021-01-02T10:04:02.000Z',
          updateAt: '2021-05-02T07:33:08.000Z',
          leader: 'lily'
        },
        {
          id: 4,
          name: '客服部',
          parentId: 2,
          createAt: '2021-01-02T10:04:02.000Z',
          updateAt: '2021-08-03T11:14:32.000Z',
          leader: 'lily'
        },
        {
          id: 3,
          name: '运营部',
          parentId: 1,
          createAt: '2021-01-02T10:03:42.000Z',
          updateAt: '2021-01-05T08:25:52.000Z',
          leader: 'lucy'
        },
        {
          id: 2,
          name: '研发部',
          parentId: 1,
          createAt: '2021-01-02T10:03:21.000Z',
          updateAt: '2021-01-05T08:25:49.000Z',
          leader: 'lilei'
        },
        {
          id: 1,
          name: '总裁办',
          parentId: null,
          createAt: '2021-01-02T10:03:09.000Z',
          updateAt: '2021-01-05T08:25:46.000Z',
          leader: 'coderwhy'
        },
        {
          id: 0,
          name: '鸡你太美🐔',
          parentId: 1,
          createAt: '2024-02-01T07:12:41.000Z',
          updateAt: '2024-02-01T07:16:57.000Z',
          leader: '鸡你太美🐟'
        }
      ],
      totalCount: 9
    }
  },
  status: 200,
  statusText: 'OK',
  headers: { 'content-length': '1267', 'content-type': 'application/json; charset=utf-8' },
  config: {
    transitional: { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false },
    adapter: ['xhr', 'http'],
    transformRequest: [null],
    transformResponse: [null],
    timeout: 10000,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {},
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImNvZGVyd2h5Iiwicm9sZSI6eyJpZCI6MSwibmFtZSI6Iui2hee6p-euoeeQhuWRmCJ9LCJpYXQiOjE3Mjk0MDY4OTQsImV4cCI6MTczMTk5ODg5NH0.c8Hlb7ohhSKHmI2JXotS9TyRzNGi1RW7RJ00pLJjoObJqGQKlrSmk8yJ_vZJsCFh_0_iZR4McNu7k0oqurChPkNAyKWkw8xG8CUwqUraMXQhsL4LXFGgTi4U-5MvvntimiC5W89J8r8NA816nzbOmM9a-Et3RRsOs5uX8EQ0Nbs'
    },
    baseURL: 'http://codercba.com:5000',
    interceptors: {},
    url: '/department/list',
    data: '{"size":10,"offset":0}',
    method: 'post'
  },
  request: {}
}

// 菜单管理
export const pageListResult4 = {
  data: {
    code: 0,
    data: {
      list: [
        {
          id: 38,
          name: '系统总览',
          type: 1,
          url: '/main/analysis',
          icon: 'el-icon-monitor',
          sort: 1,
          createAt: '2021-04-19T14:11:02.000Z',
          updateAt: '2021-08-20T06:59:55.000Z',
          children: [
            {
              id: 39,
              url: '/main/analysis/overview',
              name: '核心技术',
              sort: 106,
              type: 2,
              children: null,
              createAt: '2021-01-02 18:09:11.000000',
              parentId: 38,
              updateAt: '2021-08-19 15:54:41.000000'
            },
            {
              id: 40,
              url: '/main/analysis/dashboard',
              name: '商品统计',
              sort: 107,
              type: 2,
              children: null,
              createAt: '2021-01-02 18:09:22.000000',
              parentId: 38,
              updateAt: '2021-08-19 15:56:08.000000'
            }
          ]
        },
        {
          id: 1,
          name: '系统管理',
          type: 1,
          url: '/main/system',
          icon: 'el-icon-setting',
          sort: 2,
          createAt: '2021-01-02T10:08:14.000Z',
          updateAt: '2021-08-20T07:00:08.000Z',
          children: [
            {
              id: 2,
              url: '/main/system/user',
              name: '用户管理',
              sort: 100,
              type: 2,
              children: [
                {
                  id: 5,
                  url: null,
                  name: '创建用户',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 2,
                  updateAt: '2021-08-19 16:10:06.000000',
                  permission: 'system:users:create'
                },
                {
                  id: 6,
                  url: null,
                  name: '删除用户',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 2,
                  updateAt: '2021-08-19 16:10:21.000000',
                  permission: 'system:users:delete'
                },
                {
                  id: 7,
                  url: null,
                  name: '修改用户',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 2,
                  updateAt: '2021-08-19 16:10:24.000000',
                  permission: 'system:users:update'
                },
                {
                  id: 8,
                  url: null,
                  name: '查询用户',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 2,
                  updateAt: '2021-08-19 16:10:26.000000',
                  permission: 'system:users:query'
                }
              ],
              createAt: '2021-01-02 18:08:47.000000',
              parentId: 1,
              updateAt: '2021-08-19 15:52:01.000000'
            },
            {
              id: 3,
              url: '/main/system/department',
              name: '部门管理',
              sort: 101,
              type: 2,
              children: [
                {
                  id: 17,
                  url: null,
                  name: '创建部门',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 3,
                  updateAt: '2021-04-19 21:59:39.000000',
                  permission: 'system:department:create'
                },
                {
                  id: 18,
                  url: null,
                  name: '删除部门',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 3,
                  updateAt: '2021-04-19 22:05:07.000000',
                  permission: 'system:department:delete'
                },
                {
                  id: 19,
                  url: null,
                  name: '修改部门',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 3,
                  updateAt: '2021-04-19 22:05:11.000000',
                  permission: 'system:department:update'
                },
                {
                  id: 20,
                  url: null,
                  name: '查询部门',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 3,
                  updateAt: '2021-04-19 22:05:14.000000',
                  permission: 'system:department:query'
                }
              ],
              createAt: '2021-01-02 18:09:11.000000',
              parentId: 1,
              updateAt: '2021-08-19 15:52:04.000000'
            },
            {
              id: 4,
              url: '/main/system/menu',
              name: '菜单管理',
              sort: 103,
              type: 2,
              children: [
                {
                  id: 21,
                  url: null,
                  name: '创建菜单',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 4,
                  updateAt: '2021-04-19 21:59:39.000000',
                  permission: 'system:menu:create'
                },
                {
                  id: 22,
                  url: null,
                  name: '删除菜单',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 4,
                  updateAt: '2021-04-19 22:05:18.000000',
                  permission: 'system:menu:delete'
                },
                {
                  id: 23,
                  url: null,
                  name: '修改菜单',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 4,
                  updateAt: '2021-04-19 22:05:21.000000',
                  permission: 'system:menu:update'
                },
                {
                  id: 24,
                  url: null,
                  name: '查询菜单',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 4,
                  updateAt: '2021-04-19 22:05:24.000000',
                  permission: 'system:menu:query'
                }
              ],
              createAt: '2021-01-02 18:09:22.000000',
              parentId: 1,
              updateAt: '2021-08-19 15:52:07.000000'
            },
            {
              id: 25,
              url: '/main/system/role',
              name: '角色管理',
              sort: 102,
              type: 2,
              children: [
                {
                  id: 26,
                  url: null,
                  name: '创建角色',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 25,
                  updateAt: '2021-04-19 21:59:39.000000',
                  permission: 'system:role:create'
                },
                {
                  id: 27,
                  url: null,
                  name: '删除角色',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 25,
                  updateAt: '2021-04-19 21:59:44.000000',
                  permission: 'system:role:delete'
                },
                {
                  id: 28,
                  url: null,
                  name: '修改角色',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 25,
                  updateAt: '2021-04-19 21:59:47.000000',
                  permission: 'system:role:update'
                },
                {
                  id: 29,
                  url: null,
                  name: '查询角色',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 25,
                  updateAt: '2021-04-19 21:59:49.000000',
                  permission: 'system:role:query'
                }
              ],
              createAt: '2021-01-02 18:09:22.000000',
              parentId: 1,
              updateAt: '2021-08-19 15:52:17.000000'
            }
          ]
        },
        {
          id: 9,
          name: '商品中心',
          type: 1,
          url: '/main/product',
          icon: 'el-icon-goods',
          sort: 3,
          createAt: '2021-01-05T12:15:56.000Z',
          updateAt: '2021-08-20T07:00:25.000Z',
          children: [
            {
              id: 15,
              url: '/main/product/category',
              name: '商品类别',
              sort: 104,
              type: 2,
              children: [
                {
                  id: 30,
                  url: null,
                  name: '创建类别',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 15,
                  updateAt: '2021-04-19 21:59:39.000000',
                  permission: 'system:category:create'
                },
                {
                  id: 31,
                  url: null,
                  name: '删除类别',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 15,
                  updateAt: '2021-04-19 21:59:44.000000',
                  permission: 'system:category:delete'
                },
                {
                  id: 32,
                  url: null,
                  name: '修改类别',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 15,
                  updateAt: '2021-04-19 21:59:47.000000',
                  permission: 'system:category:update'
                },
                {
                  id: 33,
                  url: null,
                  name: '查询类别',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 15,
                  updateAt: '2021-04-19 21:59:49.000000',
                  permission: 'system:category:query'
                }
              ],
              createAt: '2021-04-19 21:55:11.000000',
              parentId: 9,
              updateAt: '2021-08-19 15:52:12.000000'
            },
            {
              id: 16,
              url: '/main/product/goods',
              name: '商品信息',
              sort: 105,
              type: 2,
              children: [
                {
                  id: 34,
                  url: null,
                  name: '创建商品',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 16,
                  updateAt: '2021-08-19 17:29:46.000000',
                  permission: 'system:goods:create'
                },
                {
                  id: 35,
                  url: null,
                  name: '删除商品',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 16,
                  updateAt: '2021-08-19 17:29:50.000000',
                  permission: 'system:goods:delete'
                },
                {
                  id: 36,
                  url: null,
                  name: '修改商品',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 16,
                  updateAt: '2021-08-19 17:29:53.000000',
                  permission: 'system:goods:update'
                },
                {
                  id: 37,
                  url: null,
                  name: '查询商品',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 16,
                  updateAt: '2021-08-19 17:30:02.000000',
                  permission: 'system:goods:query'
                }
              ],
              createAt: '2021-04-19 21:57:33.000000',
              parentId: 9,
              updateAt: '2021-08-19 15:52:14.000000'
            }
          ]
        },
        {
          id: 41,
          name: '随便聊聊',
          type: 1,
          url: '/main/story',
          icon: 'el-icon-chat-line-round',
          sort: 4,
          createAt: '2021-04-19T14:11:02.000Z',
          updateAt: '2021-08-20T07:00:44.000Z',
          children: [
            {
              id: 42,
              url: '/main/story/chat',
              name: '你的故事',
              sort: 108,
              type: 2,
              children: null,
              createAt: '2021-01-02 18:09:11.000000',
              parentId: 41,
              updateAt: '2021-08-19 17:29:31.000000'
            },
            {
              id: 43,
              url: '/main/story/list',
              name: '故事列表',
              sort: 109,
              type: 2,
              children: [
                {
                  id: 10,
                  url: null,
                  name: '删除故事',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 43,
                  updateAt: '2021-04-19 21:59:44.000000',
                  permission: 'system:story:delete'
                },
                {
                  id: 11,
                  url: null,
                  name: '修改故事',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 43,
                  updateAt: '2021-04-19 21:59:47.000000',
                  permission: 'system:story:update'
                },
                {
                  id: 12,
                  url: null,
                  name: '查询故事',
                  sort: null,
                  type: 3,
                  createAt: '2021-01-03 13:41:01.000000',
                  parentId: 43,
                  updateAt: '2021-04-19 21:59:49.000000',
                  permission: 'system:story:query'
                }
              ],
              createAt: '2021-01-02 18:09:11.000000',
              parentId: 41,
              updateAt: '2021-08-19 15:52:29.000000'
            }
          ]
        }
      ]
    }
  },
  status: 200,
  statusText: 'OK',
  headers: { 'content-length': '7860', 'content-type': 'application/json; charset=utf-8' },
  config: {
    transitional: { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false },
    adapter: ['xhr', 'http'],
    transformRequest: [null],
    transformResponse: [null],
    timeout: 10000,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {},
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImNvZGVyd2h5Iiwicm9sZSI6eyJpZCI6MSwibmFtZSI6Iui2hee6p-euoeeQhuWRmCJ9LCJpYXQiOjE3Mjk0MTE3MzcsImV4cCI6MTczMjAwMzczN30.uKCASE819De1KzdHiwmn7UQgttjT8WS4AcfoG082TriK68UX_k5Han0uE8f_zwxBi68XxKruEjbfoOG9yUJwNIjiK3TmmoZMvdow01zNQ9wJi30oECrBffXkNNQeWyGuehyIQaAXEZV7cwlkN1weM0kC-rmjhPKtf9JMQdjgcmo'
    },
    baseURL: 'http://codercba.com:5000',
    interceptors: {},
    url: '/menu/list',
    data: '{"size":10,"offset":0}',
    method: 'post'
  },
  request: {}
}

// 角色管理
export const pageListResult5 = {
  data: {
    code: 0,
    data: {
      list: [
        {
          id: 14325,
          name: 'kasd',
          intro: 'sda',
          createAt: '2024-10-18T12:10:02.000Z',
          updateAt: '2024-10-18T12:10:02.000Z',
          menuList: [
            {
              id: 38,
              name: '系统总览',
              type: 1,
              url: '/main/analysis',
              icon: 'el-icon-monitor',
              sort: 1,
              children: [
                {
                  id: 39,
                  url: '/main/analysis/overview',
                  name: '核心技术',
                  sort: 106,
                  type: 2,
                  children: null,
                  parentId: 38
                },
                {
                  id: 40,
                  url: '/main/analysis/dashboard',
                  name: '商品统计',
                  sort: 107,
                  type: 2,
                  children: null,
                  parentId: 38
                }
              ]
            },
            {
              id: 1,
              name: '系统管理',
              type: 1,
              url: '/main/system',
              icon: 'el-icon-setting',
              sort: 2,
              children: [
                {
                  id: 2,
                  url: '/main/system/user',
                  name: '用户管理',
                  sort: 100,
                  type: 2,
                  children: [
                    {
                      id: 5,
                      url: null,
                      name: '创建用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:create'
                    },
                    {
                      id: 6,
                      url: null,
                      name: '删除用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:delete'
                    },
                    {
                      id: 7,
                      url: null,
                      name: '修改用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:update'
                    },
                    {
                      id: 8,
                      url: null,
                      name: '查询用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 3,
                  url: '/main/system/department',
                  name: '部门管理',
                  sort: 101,
                  type: 2,
                  children: [
                    {
                      id: 17,
                      url: null,
                      name: '创建部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:create'
                    },
                    {
                      id: 18,
                      url: null,
                      name: '删除部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:delete'
                    },
                    {
                      id: 19,
                      url: null,
                      name: '修改部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:update'
                    },
                    {
                      id: 20,
                      url: null,
                      name: '查询部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 4,
                  url: '/main/system/menu',
                  name: '菜单管理',
                  sort: 103,
                  type: 2,
                  children: [
                    {
                      id: 21,
                      url: null,
                      name: '创建菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:create'
                    },
                    {
                      id: 22,
                      url: null,
                      name: '删除菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:delete'
                    },
                    {
                      id: 23,
                      url: null,
                      name: '修改菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:update'
                    },
                    {
                      id: 24,
                      url: null,
                      name: '查询菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 25,
                  url: '/main/system/role',
                  name: '角色管理',
                  sort: 102,
                  type: 2,
                  children: [
                    {
                      id: 26,
                      url: null,
                      name: '创建角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:create'
                    },
                    {
                      id: 27,
                      url: null,
                      name: '删除角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:delete'
                    },
                    {
                      id: 28,
                      url: null,
                      name: '修改角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:update'
                    },
                    {
                      id: 29,
                      url: null,
                      name: '查询角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:query'
                    }
                  ],
                  parentId: 1
                }
              ]
            },
            {
              id: 9,
              name: '商品中心',
              type: 1,
              url: '/main/product',
              icon: 'el-icon-goods',
              sort: 3,
              children: [
                {
                  id: 15,
                  url: '/main/product/category',
                  name: '商品类别',
                  sort: 104,
                  type: 2,
                  children: [
                    {
                      id: 30,
                      url: null,
                      name: '创建类别',
                      sort: null,
                      type: 3,
                      parentId: 15,
                      permission: 'system:category:create'
                    },
                    {
                      id: 31,
                      url: null,
                      name: '删除类别',
                      sort: null,
                      type: 3,
                      parentId: 15,
                      permission: 'system:category:delete'
                    },
                    {
                      id: 32,
                      url: null,
                      name: '修改类别',
                      sort: null,
                      type: 3,
                      parentId: 15,
                      permission: 'system:category:update'
                    },
                    {
                      id: 33,
                      url: null,
                      name: '查询类别',
                      sort: null,
                      type: 3,
                      parentId: 15,
                      permission: 'system:category:query'
                    }
                  ],
                  parentId: 9
                },
                {
                  id: 16,
                  url: '/main/product/goods',
                  name: '商品信息',
                  sort: 105,
                  type: 2,
                  children: [
                    {
                      id: 34,
                      url: null,
                      name: '创建商品',
                      sort: null,
                      type: 3,
                      parentId: 16,
                      permission: 'system:goods:create'
                    },
                    {
                      id: 35,
                      url: null,
                      name: '删除商品',
                      sort: null,
                      type: 3,
                      parentId: 16,
                      permission: 'system:goods:delete'
                    },
                    {
                      id: 36,
                      url: null,
                      name: '修改商品',
                      sort: null,
                      type: 3,
                      parentId: 16,
                      permission: 'system:goods:update'
                    },
                    {
                      id: 37,
                      url: null,
                      name: '查询商品',
                      sort: null,
                      type: 3,
                      parentId: 16,
                      permission: 'system:goods:query'
                    }
                  ],
                  parentId: 9
                }
              ]
            },
            {
              id: 41,
              name: '随便聊聊',
              type: 1,
              url: '/main/story',
              icon: 'el-icon-chat-line-round',
              sort: 4,
              children: [
                {
                  id: 42,
                  url: '/main/story/chat',
                  name: '你的故事',
                  sort: 108,
                  type: 2,
                  children: null,
                  parentId: 41
                },
                {
                  id: 43,
                  url: '/main/story/list',
                  name: '故事列表',
                  sort: 109,
                  type: 2,
                  children: [
                    {
                      id: 10,
                      url: null,
                      name: '删除故事',
                      sort: null,
                      type: 3,
                      parentId: 43,
                      permission: 'system:story:delete'
                    },
                    {
                      id: 11,
                      url: null,
                      name: '修改故事',
                      sort: null,
                      type: 3,
                      parentId: 43,
                      permission: 'system:story:update'
                    },
                    {
                      id: 12,
                      url: null,
                      name: '查询故事',
                      sort: null,
                      type: 3,
                      parentId: 43,
                      permission: 'system:story:query'
                    }
                  ],
                  parentId: 41
                }
              ]
            }
          ]
        },
        {
          id: 14324,
          name: 'demo',
          intro: '测试权限',
          createAt: '2024-10-18T11:58:10.000Z',
          updateAt: '2024-10-18T11:58:10.000Z',
          menuList: [
            {
              id: 38,
              name: '系统总览',
              type: 1,
              url: '/main/analysis',
              icon: 'el-icon-monitor',
              sort: 1,
              children: [
                {
                  id: 39,
                  url: '/main/analysis/overview',
                  name: '核心技术',
                  sort: 106,
                  type: 2,
                  children: null,
                  parentId: 38
                },
                {
                  id: 40,
                  url: '/main/analysis/dashboard',
                  name: '商品统计',
                  sort: 107,
                  type: 2,
                  children: null,
                  parentId: 38
                }
              ]
            },
            {
              id: 1,
              name: '系统管理',
              type: 1,
              url: '/main/system',
              icon: 'el-icon-setting',
              sort: 2,
              children: [
                {
                  id: 2,
                  url: '/main/system/user',
                  name: '用户管理',
                  sort: 100,
                  type: 2,
                  children: [
                    {
                      id: 5,
                      url: null,
                      name: '创建用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:create'
                    },
                    {
                      id: 6,
                      url: null,
                      name: '删除用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:delete'
                    },
                    {
                      id: 7,
                      url: null,
                      name: '修改用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:update'
                    },
                    {
                      id: 8,
                      url: null,
                      name: '查询用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 3,
                  url: '/main/system/department',
                  name: '部门管理',
                  sort: 101,
                  type: 2,
                  children: [
                    {
                      id: 17,
                      url: null,
                      name: '创建部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:create'
                    },
                    {
                      id: 18,
                      url: null,
                      name: '删除部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:delete'
                    },
                    {
                      id: 19,
                      url: null,
                      name: '修改部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:update'
                    },
                    {
                      id: 20,
                      url: null,
                      name: '查询部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 4,
                  url: '/main/system/menu',
                  name: '菜单管理',
                  sort: 103,
                  type: 2,
                  children: [
                    {
                      id: 21,
                      url: null,
                      name: '创建菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:create'
                    },
                    {
                      id: 22,
                      url: null,
                      name: '删除菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:delete'
                    },
                    {
                      id: 23,
                      url: null,
                      name: '修改菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:update'
                    },
                    {
                      id: 24,
                      url: null,
                      name: '查询菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 25,
                  url: '/main/system/role',
                  name: '角色管理',
                  sort: 102,
                  type: 2,
                  children: [
                    {
                      id: 26,
                      url: null,
                      name: '创建角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:create'
                    },
                    {
                      id: 27,
                      url: null,
                      name: '删除角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:delete'
                    },
                    {
                      id: 28,
                      url: null,
                      name: '修改角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:update'
                    },
                    {
                      id: 29,
                      url: null,
                      name: '查询角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:query'
                    }
                  ],
                  parentId: 1
                }
              ]
            },
            {
              id: 9,
              name: '商品中心',
              type: 1,
              url: '/main/product',
              icon: 'el-icon-goods',
              sort: 3,
              children: [
                {
                  id: 15,
                  url: '/main/product/category',
                  name: '商品类别',
                  sort: 104,
                  type: 2,
                  children: [
                    {
                      id: 30,
                      url: null,
                      name: '创建类别',
                      sort: null,
                      type: 3,
                      parentId: 15,
                      permission: 'system:category:create'
                    },
                    {
                      id: 31,
                      url: null,
                      name: '删除类别',
                      sort: null,
                      type: 3,
                      parentId: 15,
                      permission: 'system:category:delete'
                    },
                    {
                      id: 32,
                      url: null,
                      name: '修改类别',
                      sort: null,
                      type: 3,
                      parentId: 15,
                      permission: 'system:category:update'
                    },
                    {
                      id: 33,
                      url: null,
                      name: '查询类别',
                      sort: null,
                      type: 3,
                      parentId: 15,
                      permission: 'system:category:query'
                    }
                  ],
                  parentId: 9
                },
                {
                  id: 16,
                  url: '/main/product/goods',
                  name: '商品信息',
                  sort: 105,
                  type: 2,
                  children: [
                    {
                      id: 34,
                      url: null,
                      name: '创建商品',
                      sort: null,
                      type: 3,
                      parentId: 16,
                      permission: 'system:goods:create'
                    },
                    {
                      id: 35,
                      url: null,
                      name: '删除商品',
                      sort: null,
                      type: 3,
                      parentId: 16,
                      permission: 'system:goods:delete'
                    },
                    {
                      id: 36,
                      url: null,
                      name: '修改商品',
                      sort: null,
                      type: 3,
                      parentId: 16,
                      permission: 'system:goods:update'
                    },
                    {
                      id: 37,
                      url: null,
                      name: '查询商品',
                      sort: null,
                      type: 3,
                      parentId: 16,
                      permission: 'system:goods:query'
                    }
                  ],
                  parentId: 9
                }
              ]
            },
            {
              id: 41,
              name: '随便聊聊',
              type: 1,
              url: '/main/story',
              icon: 'el-icon-chat-line-round',
              sort: 4,
              children: [
                {
                  id: 42,
                  url: '/main/story/chat',
                  name: '你的故事',
                  sort: 108,
                  type: 2,
                  children: null,
                  parentId: 41
                },
                {
                  id: 43,
                  url: '/main/story/list',
                  name: '故事列表',
                  sort: 109,
                  type: 2,
                  children: [
                    {
                      id: 10,
                      url: null,
                      name: '删除故事',
                      sort: null,
                      type: 3,
                      parentId: 43,
                      permission: 'system:story:delete'
                    },
                    {
                      id: 11,
                      url: null,
                      name: '修改故事',
                      sort: null,
                      type: 3,
                      parentId: 43,
                      permission: 'system:story:update'
                    },
                    {
                      id: 12,
                      url: null,
                      name: '查询故事',
                      sort: null,
                      type: 3,
                      parentId: 43,
                      permission: 'system:story:query'
                    }
                  ],
                  parentId: 41
                }
              ]
            }
          ]
        },
        {
          id: 14290,
          name: 'demo04',
          intro: '部门管理：增 菜单管理：所有',
          createAt: '2024-10-15T07:30:40.000Z',
          updateAt: '2024-10-15T11:33:49.000Z',
          menuList: [
            {
              id: 1,
              name: '系统管理',
              type: 1,
              url: '/main/system',
              icon: 'el-icon-setting',
              sort: 2,
              children: [
                {
                  id: 2,
                  url: '/main/system/user',
                  name: '用户管理',
                  sort: 100,
                  type: 2,
                  children: [
                    {
                      id: 5,
                      url: null,
                      name: '创建用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:create'
                    },
                    {
                      id: 6,
                      url: null,
                      name: '删除用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:delete'
                    },
                    {
                      id: 7,
                      url: null,
                      name: '修改用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:update'
                    },
                    {
                      id: 8,
                      url: null,
                      name: '查询用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 3,
                  url: '/main/system/department',
                  name: '部门管理',
                  sort: 101,
                  type: 2,
                  children: [
                    {
                      id: 17,
                      url: null,
                      name: '创建部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:create'
                    },
                    {
                      id: 18,
                      url: null,
                      name: '删除部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:delete'
                    },
                    {
                      id: 19,
                      url: null,
                      name: '修改部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:update'
                    },
                    {
                      id: 20,
                      url: null,
                      name: '查询部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 4,
                  url: '/main/system/menu',
                  name: '菜单管理',
                  sort: 103,
                  type: 2,
                  children: [
                    {
                      id: 21,
                      url: null,
                      name: '创建菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:create'
                    },
                    {
                      id: 22,
                      url: null,
                      name: '删除菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:delete'
                    },
                    {
                      id: 23,
                      url: null,
                      name: '修改菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:update'
                    },
                    {
                      id: 24,
                      url: null,
                      name: '查询菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 25,
                  url: '/main/system/role',
                  name: '角色管理',
                  sort: 102,
                  type: 2,
                  children: [
                    {
                      id: 26,
                      url: null,
                      name: '创建角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:create'
                    },
                    {
                      id: 27,
                      url: null,
                      name: '删除角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:delete'
                    },
                    {
                      id: 28,
                      url: null,
                      name: '修改角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:update'
                    },
                    {
                      id: 29,
                      url: null,
                      name: '查询角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:query'
                    }
                  ],
                  parentId: 1
                }
              ]
            }
          ]
        },
        {
          id: 14287,
          name: 'demo02',
          intro: '部门管理：增、查  菜单管理：所有',
          createAt: '2024-10-15T07:07:20.000Z',
          updateAt: '2024-10-15T07:07:20.000Z',
          menuList: [
            {
              id: 38,
              name: '系统总览',
              type: 1,
              url: '/main/analysis',
              icon: 'el-icon-monitor',
              sort: 1,
              children: [
                {
                  id: 39,
                  url: '/main/analysis/overview',
                  name: '核心技术',
                  sort: 106,
                  type: 2,
                  children: null,
                  parentId: 38
                },
                {
                  id: 40,
                  url: '/main/analysis/dashboard',
                  name: '商品统计',
                  sort: 107,
                  type: 2,
                  children: null,
                  parentId: 38
                }
              ]
            },
            {
              id: 1,
              name: '系统管理',
              type: 1,
              url: '/main/system',
              icon: 'el-icon-setting',
              sort: 2,
              children: [
                {
                  id: 2,
                  url: '/main/system/user',
                  name: '用户管理',
                  sort: 100,
                  type: 2,
                  children: [
                    {
                      id: 5,
                      url: null,
                      name: '创建用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:create'
                    },
                    {
                      id: 6,
                      url: null,
                      name: '删除用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:delete'
                    },
                    {
                      id: 7,
                      url: null,
                      name: '修改用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:update'
                    },
                    {
                      id: 8,
                      url: null,
                      name: '查询用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 3,
                  url: '/main/system/department',
                  name: '部门管理',
                  sort: 101,
                  type: 2,
                  children: [
                    {
                      id: 17,
                      url: null,
                      name: '创建部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:create'
                    },
                    {
                      id: 20,
                      url: null,
                      name: '查询部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 4,
                  url: '/main/system/menu',
                  name: '菜单管理',
                  sort: 103,
                  type: 2,
                  children: [
                    {
                      id: 21,
                      url: null,
                      name: '创建菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:create'
                    },
                    {
                      id: 22,
                      url: null,
                      name: '删除菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:delete'
                    },
                    {
                      id: 23,
                      url: null,
                      name: '修改菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:update'
                    },
                    {
                      id: 24,
                      url: null,
                      name: '查询菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:query'
                    }
                  ],
                  parentId: 1
                }
              ]
            }
          ]
        },
        {
          id: 14284,
          name: '扫地僧',
          intro: '扫地',
          createAt: '2024-10-12T02:57:54.000Z',
          updateAt: '2024-10-12T02:57:54.000Z',
          menuList: [
            {
              id: 1,
              name: '系统管理',
              type: 1,
              url: '/main/system',
              icon: 'el-icon-setting',
              sort: 2,
              children: [
                {
                  id: 2,
                  url: '/main/system/user',
                  name: '用户管理',
                  sort: 100,
                  type: 2,
                  children: [
                    {
                      id: 5,
                      url: null,
                      name: '创建用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:create'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 3,
                  url: '/main/system/department',
                  name: '部门管理',
                  sort: 101,
                  type: 2,
                  children: [
                    {
                      id: 19,
                      url: null,
                      name: '修改部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:update'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 4,
                  url: '/main/system/menu',
                  name: '菜单管理',
                  sort: 103,
                  type: 2,
                  children: [
                    {
                      id: 21,
                      url: null,
                      name: '创建菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:create'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 25,
                  url: '/main/system/role',
                  name: '角色管理',
                  sort: 102,
                  type: 2,
                  children: [
                    {
                      id: 29,
                      url: null,
                      name: '查询角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:query'
                    }
                  ],
                  parentId: 1
                }
              ]
            }
          ]
        },
        {
          id: 14282,
          name: 'coderFish',
          intro: 'coderFish权限',
          createAt: '2024-10-09T15:46:38.000Z',
          updateAt: '2024-10-09T15:46:38.000Z',
          menuList: [
            {
              id: 38,
              name: '系统总览',
              type: 1,
              url: '/main/analysis',
              icon: 'el-icon-monitor',
              sort: 1,
              children: [
                {
                  id: 39,
                  url: '/main/analysis/overview',
                  name: '核心技术',
                  sort: 106,
                  type: 2,
                  children: null,
                  parentId: 38
                },
                {
                  id: 40,
                  url: '/main/analysis/dashboard',
                  name: '商品统计',
                  sort: 107,
                  type: 2,
                  children: null,
                  parentId: 38
                }
              ]
            },
            {
              id: 1,
              name: '系统管理',
              type: 1,
              url: '/main/system',
              icon: 'el-icon-setting',
              sort: 2,
              children: [
                {
                  id: 3,
                  url: '/main/system/department',
                  name: '部门管理',
                  sort: 101,
                  type: 2,
                  children: [
                    {
                      id: 19,
                      url: null,
                      name: '修改部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:update'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 4,
                  url: '/main/system/menu',
                  name: '菜单管理',
                  sort: 103,
                  type: 2,
                  children: [
                    {
                      id: 22,
                      url: null,
                      name: '删除菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:delete'
                    }
                  ],
                  parentId: 1
                }
              ]
            }
          ]
        },
        {
          id: 14274,
          name: 'demo测试',
          intro: '11',
          createAt: '2024-10-09T03:37:05.000Z',
          updateAt: '2024-10-09T03:37:05.000Z',
          menuList: [
            {
              id: 1,
              name: '系统管理',
              type: 1,
              url: '/main/system',
              icon: 'el-icon-setting',
              sort: 2,
              children: [
                {
                  id: 2,
                  url: '/main/system/user',
                  name: '用户管理',
                  sort: 100,
                  type: 2,
                  children: [
                    {
                      id: 8,
                      url: null,
                      name: '查询用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:query'
                    }
                  ],
                  parentId: 1
                }
              ]
            }
          ]
        },
        {
          id: 14273,
          name: '前台',
          intro: '前台权限',
          createAt: '2024-10-08T16:07:04.000Z',
          updateAt: '2024-10-08T16:07:04.000Z',
          menuList: [
            {
              id: 38,
              name: '系统总览',
              type: 1,
              url: '/main/analysis',
              icon: 'el-icon-monitor',
              sort: 1,
              children: [
                {
                  id: 39,
                  url: '/main/analysis/overview',
                  name: '核心技术',
                  sort: 106,
                  type: 2,
                  children: null,
                  parentId: 38
                },
                {
                  id: 40,
                  url: '/main/analysis/dashboard',
                  name: '商品统计',
                  sort: 107,
                  type: 2,
                  children: null,
                  parentId: 38
                }
              ]
            },
            {
              id: 1,
              name: '系统管理',
              type: 1,
              url: '/main/system',
              icon: 'el-icon-setting',
              sort: 2,
              children: [
                {
                  id: 2,
                  url: '/main/system/user',
                  name: '用户管理',
                  sort: 100,
                  type: 2,
                  children: [
                    {
                      id: 5,
                      url: null,
                      name: '创建用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:create'
                    },
                    {
                      id: 6,
                      url: null,
                      name: '删除用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:delete'
                    },
                    {
                      id: 7,
                      url: null,
                      name: '修改用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:update'
                    },
                    {
                      id: 8,
                      url: null,
                      name: '查询用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 3,
                  url: '/main/system/department',
                  name: '部门管理',
                  sort: 101,
                  type: 2,
                  children: [
                    {
                      id: 17,
                      url: null,
                      name: '创建部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:create'
                    },
                    {
                      id: 18,
                      url: null,
                      name: '删除部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:delete'
                    },
                    {
                      id: 19,
                      url: null,
                      name: '修改部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:update'
                    },
                    {
                      id: 20,
                      url: null,
                      name: '查询部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 4,
                  url: '/main/system/menu',
                  name: '菜单管理',
                  sort: 103,
                  type: 2,
                  children: [
                    {
                      id: 21,
                      url: null,
                      name: '创建菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:create'
                    },
                    {
                      id: 22,
                      url: null,
                      name: '删除菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:delete'
                    },
                    {
                      id: 23,
                      url: null,
                      name: '修改菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:update'
                    },
                    {
                      id: 24,
                      url: null,
                      name: '查询菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 25,
                  url: '/main/system/role',
                  name: '角色管理',
                  sort: 102,
                  type: 2,
                  children: [
                    {
                      id: 26,
                      url: null,
                      name: '创建角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:create'
                    },
                    {
                      id: 27,
                      url: null,
                      name: '删除角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:delete'
                    },
                    {
                      id: 28,
                      url: null,
                      name: '修改角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:update'
                    },
                    {
                      id: 29,
                      url: null,
                      name: '查询角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:query'
                    }
                  ],
                  parentId: 1
                }
              ]
            }
          ]
        },
        {
          id: 4,
          name: '人事',
          intro: '人事管理',
          createAt: '2021-01-05T11:47:42.000Z',
          updateAt: '2021-01-05T11:50:11.000Z',
          menuList: [
            {
              id: 38,
              name: '系统总览',
              type: 1,
              url: '/main/analysis',
              icon: 'el-icon-monitor',
              sort: 1,
              children: [
                {
                  id: 39,
                  url: '/main/analysis/overview',
                  name: '核心技术',
                  sort: 106,
                  type: 2,
                  children: null,
                  parentId: 38
                },
                {
                  id: 40,
                  url: '/main/analysis/dashboard',
                  name: '商品统计',
                  sort: 107,
                  type: 2,
                  children: null,
                  parentId: 38
                }
              ]
            }
          ]
        },
        {
          id: 3,
          name: '运营',
          intro: '日常事务',
          createAt: '2021-01-05T11:47:42.000Z',
          updateAt: '2021-01-05T11:50:11.000Z',
          menuList: [
            {
              id: 38,
              name: '系统总览',
              type: 1,
              url: '/main/analysis',
              icon: 'el-icon-monitor',
              sort: 1,
              children: [
                {
                  id: 39,
                  url: '/main/analysis/overview',
                  name: '核心技术',
                  sort: 106,
                  type: 2,
                  children: null,
                  parentId: 38
                },
                {
                  id: 40,
                  url: '/main/analysis/dashboard',
                  name: '商品统计',
                  sort: 107,
                  type: 2,
                  children: null,
                  parentId: 38
                }
              ]
            },
            {
              id: 1,
              name: '系统管理',
              type: 1,
              url: '/main/system',
              icon: 'el-icon-setting',
              sort: 2,
              children: [
                {
                  id: 2,
                  url: '/main/system/user',
                  name: '用户管理',
                  sort: 100,
                  type: 2,
                  children: [
                    {
                      id: 5,
                      url: null,
                      name: '创建用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:create'
                    },
                    {
                      id: 6,
                      url: null,
                      name: '删除用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:delete'
                    },
                    {
                      id: 7,
                      url: null,
                      name: '修改用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:update'
                    },
                    {
                      id: 8,
                      url: null,
                      name: '查询用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 3,
                  url: '/main/system/department',
                  name: '部门管理',
                  sort: 101,
                  type: 2,
                  children: [
                    {
                      id: 17,
                      url: null,
                      name: '创建部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:create'
                    },
                    {
                      id: 18,
                      url: null,
                      name: '删除部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:delete'
                    },
                    {
                      id: 19,
                      url: null,
                      name: '修改部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:update'
                    },
                    {
                      id: 20,
                      url: null,
                      name: '查询部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 4,
                  url: '/main/system/menu',
                  name: '菜单管理',
                  sort: 103,
                  type: 2,
                  children: [
                    {
                      id: 21,
                      url: null,
                      name: '创建菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:create'
                    },
                    {
                      id: 22,
                      url: null,
                      name: '删除菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:delete'
                    },
                    {
                      id: 23,
                      url: null,
                      name: '修改菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:update'
                    },
                    {
                      id: 24,
                      url: null,
                      name: '查询菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 25,
                  url: '/main/system/role',
                  name: '角色管理',
                  sort: 102,
                  type: 2,
                  children: [
                    {
                      id: 26,
                      url: null,
                      name: '创建角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:create'
                    },
                    {
                      id: 27,
                      url: null,
                      name: '删除角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:delete'
                    },
                    {
                      id: 28,
                      url: null,
                      name: '修改角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:update'
                    },
                    {
                      id: 29,
                      url: null,
                      name: '查询角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:query'
                    }
                  ],
                  parentId: 1
                }
              ]
            },
            {
              id: 9,
              name: '商品中心',
              type: 1,
              url: '/main/product',
              icon: 'el-icon-goods',
              sort: 3,
              children: [
                {
                  id: 15,
                  url: '/main/product/category',
                  name: '商品类别',
                  sort: 104,
                  type: 2,
                  children: [
                    {
                      id: 30,
                      url: null,
                      name: '创建类别',
                      sort: null,
                      type: 3,
                      parentId: 15,
                      permission: 'system:category:create'
                    },
                    {
                      id: 31,
                      url: null,
                      name: '删除类别',
                      sort: null,
                      type: 3,
                      parentId: 15,
                      permission: 'system:category:delete'
                    },
                    {
                      id: 32,
                      url: null,
                      name: '修改类别',
                      sort: null,
                      type: 3,
                      parentId: 15,
                      permission: 'system:category:update'
                    },
                    {
                      id: 33,
                      url: null,
                      name: '查询类别',
                      sort: null,
                      type: 3,
                      parentId: 15,
                      permission: 'system:category:query'
                    }
                  ],
                  parentId: 9
                },
                {
                  id: 16,
                  url: '/main/product/goods',
                  name: '商品信息',
                  sort: 105,
                  type: 2,
                  children: [
                    {
                      id: 34,
                      url: null,
                      name: '创建商品',
                      sort: null,
                      type: 3,
                      parentId: 16,
                      permission: 'system:goods:create'
                    },
                    {
                      id: 35,
                      url: null,
                      name: '删除商品',
                      sort: null,
                      type: 3,
                      parentId: 16,
                      permission: 'system:goods:delete'
                    },
                    {
                      id: 36,
                      url: null,
                      name: '修改商品',
                      sort: null,
                      type: 3,
                      parentId: 16,
                      permission: 'system:goods:update'
                    },
                    {
                      id: 37,
                      url: null,
                      name: '查询商品',
                      sort: null,
                      type: 3,
                      parentId: 16,
                      permission: 'system:goods:query'
                    }
                  ],
                  parentId: 9
                }
              ]
            },
            {
              id: 41,
              name: '随便聊聊',
              type: 1,
              url: '/main/story',
              icon: 'el-icon-chat-line-round',
              sort: 4,
              children: [
                {
                  id: 42,
                  url: '/main/story/chat',
                  name: '你的故事',
                  sort: 108,
                  type: 2,
                  children: null,
                  parentId: 41
                },
                {
                  id: 43,
                  url: '/main/story/list',
                  name: '故事列表',
                  sort: 109,
                  type: 2,
                  children: [],
                  parentId: 41
                }
              ]
            }
          ]
        },
        {
          id: 1,
          name: '超级管理员',
          intro: '所有权限',
          createAt: '2021-01-02T10:01:52.000Z',
          updateAt: '2021-01-02T10:01:52.000Z',
          menuList: [
            {
              id: 38,
              name: '系统总览',
              type: 1,
              url: '/main/analysis',
              icon: 'el-icon-monitor',
              sort: 1,
              children: [
                {
                  id: 39,
                  url: '/main/analysis/overview',
                  name: '核心技术',
                  sort: 106,
                  type: 2,
                  children: null,
                  parentId: 38
                },
                {
                  id: 40,
                  url: '/main/analysis/dashboard',
                  name: '商品统计',
                  sort: 107,
                  type: 2,
                  children: null,
                  parentId: 38
                }
              ]
            },
            {
              id: 1,
              name: '系统管理',
              type: 1,
              url: '/main/system',
              icon: 'el-icon-setting',
              sort: 2,
              children: [
                {
                  id: 2,
                  url: '/main/system/user',
                  name: '用户管理',
                  sort: 100,
                  type: 2,
                  children: [
                    {
                      id: 5,
                      url: null,
                      name: '创建用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:create'
                    },
                    {
                      id: 6,
                      url: null,
                      name: '删除用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:delete'
                    },
                    {
                      id: 7,
                      url: null,
                      name: '修改用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:update'
                    },
                    {
                      id: 8,
                      url: null,
                      name: '查询用户',
                      sort: null,
                      type: 3,
                      parentId: 2,
                      permission: 'system:users:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 3,
                  url: '/main/system/department',
                  name: '部门管理',
                  sort: 101,
                  type: 2,
                  children: [
                    {
                      id: 17,
                      url: null,
                      name: '创建部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:create'
                    },
                    {
                      id: 18,
                      url: null,
                      name: '删除部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:delete'
                    },
                    {
                      id: 19,
                      url: null,
                      name: '修改部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:update'
                    },
                    {
                      id: 20,
                      url: null,
                      name: '查询部门',
                      sort: null,
                      type: 3,
                      parentId: 3,
                      permission: 'system:department:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 4,
                  url: '/main/system/menu',
                  name: '菜单管理',
                  sort: 103,
                  type: 2,
                  children: [
                    {
                      id: 21,
                      url: null,
                      name: '创建菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:create'
                    },
                    {
                      id: 22,
                      url: null,
                      name: '删除菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:delete'
                    },
                    {
                      id: 23,
                      url: null,
                      name: '修改菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:update'
                    },
                    {
                      id: 24,
                      url: null,
                      name: '查询菜单',
                      sort: null,
                      type: 3,
                      parentId: 4,
                      permission: 'system:menu:query'
                    }
                  ],
                  parentId: 1
                },
                {
                  id: 25,
                  url: '/main/system/role',
                  name: '角色管理',
                  sort: 102,
                  type: 2,
                  children: [
                    {
                      id: 26,
                      url: null,
                      name: '创建角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:create'
                    },
                    {
                      id: 27,
                      url: null,
                      name: '删除角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:delete'
                    },
                    {
                      id: 28,
                      url: null,
                      name: '修改角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:update'
                    },
                    {
                      id: 29,
                      url: null,
                      name: '查询角色',
                      sort: null,
                      type: 3,
                      parentId: 25,
                      permission: 'system:role:query'
                    }
                  ],
                  parentId: 1
                }
              ]
            },
            {
              id: 9,
              name: '商品中心',
              type: 1,
              url: '/main/product',
              icon: 'el-icon-goods',
              sort: 3,
              children: [
                {
                  id: 15,
                  url: '/main/product/category',
                  name: '商品类别',
                  sort: 104,
                  type: 2,
                  children: [
                    {
                      id: 30,
                      url: null,
                      name: '创建类别',
                      sort: null,
                      type: 3,
                      parentId: 15,
                      permission: 'system:category:create'
                    },
                    {
                      id: 31,
                      url: null,
                      name: '删除类别',
                      sort: null,
                      type: 3,
                      parentId: 15,
                      permission: 'system:category:delete'
                    },
                    {
                      id: 32,
                      url: null,
                      name: '修改类别',
                      sort: null,
                      type: 3,
                      parentId: 15,
                      permission: 'system:category:update'
                    },
                    {
                      id: 33,
                      url: null,
                      name: '查询类别',
                      sort: null,
                      type: 3,
                      parentId: 15,
                      permission: 'system:category:query'
                    }
                  ],
                  parentId: 9
                },
                {
                  id: 16,
                  url: '/main/product/goods',
                  name: '商品信息',
                  sort: 105,
                  type: 2,
                  children: [
                    {
                      id: 34,
                      url: null,
                      name: '创建商品',
                      sort: null,
                      type: 3,
                      parentId: 16,
                      permission: 'system:goods:create'
                    },
                    {
                      id: 35,
                      url: null,
                      name: '删除商品',
                      sort: null,
                      type: 3,
                      parentId: 16,
                      permission: 'system:goods:delete'
                    },
                    {
                      id: 36,
                      url: null,
                      name: '修改商品',
                      sort: null,
                      type: 3,
                      parentId: 16,
                      permission: 'system:goods:update'
                    },
                    {
                      id: 37,
                      url: null,
                      name: '查询商品',
                      sort: null,
                      type: 3,
                      parentId: 16,
                      permission: 'system:goods:query'
                    }
                  ],
                  parentId: 9
                }
              ]
            },
            {
              id: 41,
              name: '随便聊聊',
              type: 1,
              url: '/main/story',
              icon: 'el-icon-chat-line-round',
              sort: 4,
              children: [
                {
                  id: 42,
                  url: '/main/story/chat',
                  name: '你的故事',
                  sort: 108,
                  type: 2,
                  children: null,
                  parentId: 41
                },
                {
                  id: 43,
                  url: '/main/story/list',
                  name: '故事列表',
                  sort: 109,
                  type: 2,
                  children: [
                    {
                      id: 10,
                      url: null,
                      name: '删除故事',
                      sort: null,
                      type: 3,
                      parentId: 43,
                      permission: 'system:story:delete'
                    },
                    {
                      id: 11,
                      url: null,
                      name: '修改故事',
                      sort: null,
                      type: 3,
                      parentId: 43,
                      permission: 'system:story:update'
                    },
                    {
                      id: 12,
                      url: null,
                      name: '查询故事',
                      sort: null,
                      type: 3,
                      parentId: 43,
                      permission: 'system:story:query'
                    }
                  ],
                  parentId: 41
                }
              ]
            }
          ]
        }
      ],
      totalCount: 11
    }
  },
  status: 200,
  statusText: 'OK',
  headers: { 'content-length': '28976', 'content-type': 'application/json; charset=utf-8' },
  config: {
    transitional: { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false },
    adapter: ['xhr', 'http'],
    transformRequest: [null],
    transformResponse: [null],
    timeout: 10000,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {},
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImNvZGVyd2h5Iiwicm9sZSI6eyJpZCI6MSwibmFtZSI6Iui2hee6p-euoeeQhuWRmCJ9LCJpYXQiOjE3Mjk0MTE3MzcsImV4cCI6MTczMjAwMzczN30.uKCASE819De1KzdHiwmn7UQgttjT8WS4AcfoG082TriK68UX_k5Han0uE8f_zwxBi68XxKruEjbfoOG9yUJwNIjiK3TmmoZMvdow01zNQ9wJi30oECrBffXkNNQeWyGuehyIQaAXEZV7cwlkN1weM0kC-rmjhPKtf9JMQdjgcmo'
    },
    baseURL: 'http://codercba.com:5000',
    interceptors: {},
    url: '/role/list',
    data: '{"size":30,"offset":0}',
    method: 'post'
  },
  request: {}
}
