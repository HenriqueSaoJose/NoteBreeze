import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const workspace = pgTable('workspaces',{
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  //--------
  createdAT:timestamp('created_at',{
    withTimezone:true,
    mode:'string',
  }),
  //--------
  workspaceOwner:uuid('workspace_owner').notNull(),
  //--------
  title:text('title').notNull(),
  //--------
  iconId:text('icon_id').notNull(),
  //--------
  data:text('data'),
  //--------
  inTrash:text('in_trash'),
  //--------
  logo:text('logo'),
  //--------
  bannerUrl:text('banner_url'),
});

export const folders  = pgTable('folders',{
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  //--------
  createdAT:timestamp('created_at',{
    withTimezone:true,
    mode:'string',
  }),
  //--------
  title:text('title').notNull(),
  //--------
  iconId:text('icon_id').notNull(),
  //--------
  data:text('data'),
  //--------
  inTrash:text('in_trash'),
  //--------
  bannerUrl:text('banner_url'),
  //--------
  workspaceID: uuid('workspace_id').references(()=>workspace.id,{
    onDelete:'cascade'
  })
})


export const files = pgTable('files',{
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  //--------
  createdAT:timestamp('created_at',{
    withTimezone:true,
    mode:'string',
  }),
  //--------
  title:text('title').notNull(),
  //--------
  iconId:text('icon_id').notNull(),
  //--------
  data:text('data'),
  //--------
  inTrash:text('in_trash'),
  //--------
  bannerUrl:text('banner_url'),
  //--------
  folderId: uuid('folderd_id').references(()=>folders.id,{
    onDelete:'cascade'
  })
})