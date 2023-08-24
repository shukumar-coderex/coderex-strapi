const AnalyticsFragment = `
fragment AnalyticsFragment on PostTypeSEO {
    getAnalytics {
        goggleAnalytics
        facebookPixel
    }
}
`

export default AnalyticsFragment
