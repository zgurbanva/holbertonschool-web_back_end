#!/usr/bin/env python3
"""Measure the runtime of running async_comprehension four times in parallel."""
import asyncio
import time

async_comprehension = __import__(
    '1-async_comprehension'
).async_comprehension


async def measure_runtime() -> float:
    """
    Execute async_comprehension four times concurrently using asyncio.gather.
    Return the total runtime of the full operation.
    """
    start = time.perf_counter()

    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )

    end = time.perf_counter()
    return end - start
