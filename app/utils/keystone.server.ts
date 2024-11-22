import { getContext } from "@keystone-6/core/context"
import config from "../../keystone"
import * as PrismaModule from "myprisma"
import type { Context } from ".keystone/types"

// Making sure multiple prisma clients are not created during hot reloading
export const keystoneContext: Context =
	// @ts-expect-error: suggest code by dependancy maintainers
	(globalThis as never).keystoneContext || getContext(config, PrismaModule)

if (process.env.NODE_ENV !== "production")
	// @ts-expect-error: suggest code by dependancy maintainers
	(globalThis as never).keystoneContext = keystoneContext
