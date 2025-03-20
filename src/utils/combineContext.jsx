export default function conmbineContext( ...providers ){
    // This combine multiple providers together and returns single context provider

    return ({ children }) => {
        return providers.reduceRight((accumulator, CurrentProvider) => {
            return <CurrentProvider>{accumulator}</CurrentProvider>
        }, children /* Initial value */)
    };
}
/**
 * <A>
 *      <B>
 *          <C>
 *              {children}
 *          </C>
 *      </B>
 * </A>
 */

/**
 * <Combined>
 *  {children}
 * </Combined>
 */