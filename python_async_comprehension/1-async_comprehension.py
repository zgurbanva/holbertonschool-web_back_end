#!/usr/bin/env python3
"""Collect 10 random numbers using async comprehension."""
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Collect 10 random numbers from async_generator using async comprehension."""
    return [x async for x in async_generator()]
