import httpRequest from '@/utils/axios'

export function getUsersFetcher(url: string) {
	return httpRequest.get({url})
}